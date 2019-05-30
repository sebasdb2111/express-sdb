"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const user_controller_1 = require("./user.controller");
const controller = new user_controller_1.UserController();
const router = express.Router();
router
    .route('/user/:id')
    .get(controller.getUser);
router
    .route('/register')
    .post(controller.saveUser);
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
exports.default = router;
//# sourceMappingURL=user.routes.js.map