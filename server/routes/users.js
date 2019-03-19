import express from 'express';
import account_controller from '../controllers/users';
import messageController from '../controllers/messages';
import validations from '../helper/middleware/Validattion';
const router = express.Router();

// USER ROUTES

router.post('/api/v2/auth/signup', validations.signUpValidation, account_controller.userSignUp);
router.post('/api/v2/auth/login', validations.loginValidation, account_controller.login);

// MESSAGES ROUTES

router.post('/api/v1/messages', validations.createMessage, messageController.createMessage);
router.delete('/api/v1/messages/:id', messageController.deleteMessage)
router.get('/api/v1/messages/:id', messageController.getSpecifiMessage);
router.get('/api/v1/messages', messageController.getAllMessages);
router.get('/api/v1/messages/status/:status', messageController.getUnreadMessage);




export default router;
