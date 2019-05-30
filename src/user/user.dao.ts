import { AbstractMongoDao } from '../core/abstractMongoDao';
import { SchemaDefinition } from 'mongoose';
import { UserEntity } from './user.entity';

export class UserDao extends AbstractMongoDao<UserEntity> {

    protected getCollectionName(): string {
        return 'user';
    }

    protected getSchemaDefinition(): SchemaDefinition {
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