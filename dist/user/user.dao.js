"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractMongoDao_1 = require("../abstractMongoDao");
class UserModel {
}
exports.UserModel = UserModel;
class UserDao extends abstractMongoDao_1.AbstractMongoDao {
    getCollectionName() {
        return 'users';
    }
    getSchemaDefinition() {
        return {
            _id: String,
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