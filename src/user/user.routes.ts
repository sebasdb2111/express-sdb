import * as express from 'express';
import {Authenticated} from '../core/authenticated';
import {UserController} from './user.controller';

const controller = new UserController();
const router: express.Router = express.Router();

router
    .route('/user/:id')
    .get(
        controller.getUser
    );

router
    .route('/register')
    .post(
        controller.saveUser
    );

// router
//     .route('/update-user/:id')
//     .put(
//         Authenticated.ensureAuth,
//         controller.updateUser
//     );

// router
//     .route('/login')
//     .post(
//         controller.loginUser
//     );

export default router;
