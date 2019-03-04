import express from 'express';
import account_controller from '../controllers/create_account';
const router = express.Router();

router.post('/', account_controller.userAccount);


export default router;