import express from 'express';
import account_controller from '../controllers/users';
import messageController from '../controllers/messages';
import gorupController from '../controllers/groups';
import Auth from '../helper/user';
import validations from '../helper/middleware/Validattion';
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ message: 'Welcome to EPIC-MAIL APIs' });
  });

// USER ROUTES

router.post('/api/v2/auth/signup', validations.signUpValidation, account_controller.userSignUp);
router.post('/api/v2/auth/login', validations.loginValidation, account_controller.login);

// MESSAGES ROUTES

router.post('/api/v2/messages', validations.createMessage, Auth.checkToken, messageController.createMessage);
router.delete('/api/v2/messages/:id', Auth.checkToken, messageController.deleteMessage)
router.get('/api/v2/messages/:id', Auth.checkToken, messageController.getSpecifiMessage);
router.get('/api/v2/messages', Auth.checkToken, messageController.getAllMessages);
router.get('/api/v2/messages/status/:status', Auth.checkToken, messageController.getUnreadMessage);

// GROUP ROUTES

router.post('/api/v2/group', Auth.checkToken, gorupController.createGroup);
router.delete('/api/v2/group/:id', Auth.checkToken, gorupController.deleteGroup);
router.get('/api/v2/group/:id', Auth.checkToken, gorupController.getSpecifiGroup);
router.post('/api/v2/group/:id/users', Auth.checkToken, gorupController.addMembers)





export default router;
