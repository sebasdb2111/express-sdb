import {SchemaDefinition} from 'mongoose';
import {AbstractMongoDao} from '../abstractMongoDao';

export class UserModel {
    _id: String;
    email: String;
    name: String;
    password: String;
    role?: String;
    surname?: String;
    username: String;
}

export class UserDao extends AbstractMongoDao<UserModel> {
    public getCollectionName(): string {
        return 'users';
    }

    public getSchemaDefinition(): SchemaDefinition {
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
