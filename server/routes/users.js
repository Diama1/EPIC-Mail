import express from 'express';
import account_controller from '../controllers/users';
import messageController from '../controllers/messages';
const router = express.Router();

// USER ROUTES

router.post('/api/v1/auth/signup', account_controller.userAccount);
router.post('/api/v1/auth/login', account_controller.login);

// MESSAGES ROUTES

router.post('/api/v1/messages', messageController.createMessage);
router.delete('/api/v1/messages/:id', messageController.deleteMessage)



export default router;