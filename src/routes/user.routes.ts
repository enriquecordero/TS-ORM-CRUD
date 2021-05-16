import {Router} from 'express';
//import {getUsers, createUsers,getUser} from '../controllers/user.controllers';
import {userController} from '../controllers/user.controllers';
const router = Router();

router.get('/users',userController.getUsers)
//listar usuarios
router.get('/users/:id',userController.getUser)
//crear usuarios
router.post('/users',userController.createUsers)
//actualizar usuarios
router.put('/users/:id', userController.updateUsers)
//borrar usuarios
router.delete('/users/:id',userController.deleteUser)


export default router;