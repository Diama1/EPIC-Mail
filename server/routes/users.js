import express from 'express';
import account_controller from '../controllers/users';
const router = express.Router();

router.post('/api/v1/auth/signup', account_controller.userAccount);
router.post('/api/v1/auth/login', account_controller.login);



export default router;