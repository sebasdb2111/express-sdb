//import { SchemaDefinition } from 'mongoose';
import { AbstractMongoDao } from '../core/abstractMongoDao';
import { UserEntity } from './user.entity';

export class UserDao extends AbstractMongoDao<UserEntity> {

    protected getCollectionName(): string {
        return 'users';
    }

    protected getSchemaDefinition() {
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
