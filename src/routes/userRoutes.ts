import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUserById);
router.delete('/:id', UserController.deleteUserById);

export default router;
