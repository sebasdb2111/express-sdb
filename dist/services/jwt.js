"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const moment_1 = __importDefault(require("moment"));
class Jwt {
    /**
     * createToken
     */
    static createToken(user) {
        const payload = {
            email: user.email,
            exp: moment_1.default().add(30, 'days').unix(),
            iat: moment_1.default().unix(),
            name: user.name,
            role: user.role,
            sub: user._id,
            surname: user.surname
        };
        return jwt_simple_1.default.encode(payload, 'secret_key');
    }
}
exports.Jwt = Jwt;
//# sourceMappingURL=jwt.js.map