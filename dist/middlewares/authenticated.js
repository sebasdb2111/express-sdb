"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const moment_1 = __importDefault(require("moment"));
class Authenticated {
    /**
     * name
     */
    static ensureAuth(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(403).send({ message: 'The request has not got authentication headers' });
        }
        const token = req.headers.authorization.replace(/['"]+/g, '');
        let payload;
        try {
            payload = jwt_simple_1.default.decode(token, 'secret_key');
            if (payload.exp <= moment_1.default().unix()) {
                return res.status(401).send({
                    message: 'Token has expired'
                });
            }
        }
        catch (ex) {
            return res.status(404).send({
                message: 'Token is not valid'
            });
        }
        req.user = payload;
        next();
    }
}
exports.Authenticated = Authenticated;
//# sourceMappingURL=authenticated.js.map