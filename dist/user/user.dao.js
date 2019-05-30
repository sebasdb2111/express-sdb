"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { SchemaDefinition } from 'mongoose';
const abstractMongoDao_1 = require("../core/abstractMongoDao");
class UserDao extends abstractMongoDao_1.AbstractMongoDao {
    getCollectionName() {
        return 'users';
    }
    getSchemaDefinition() {
        return {
            email: String,
            name: String,
            password: String,
            role: String,
            surname: String,
            username: String,
        };
    }
}
exports.UserDao = UserDao;
//# sourceMappingURL=user.dao.js.map