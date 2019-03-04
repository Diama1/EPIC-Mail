import express from 'express';
import account_controller from '../controllers/users';
const router = express.Router();

router.post('/api/v1/signup', account_controller.userAccount);


export default router;