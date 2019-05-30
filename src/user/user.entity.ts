import { MongoEntity } from '../core/mongo-entity';

export class UserEntity extends MongoEntity {
    email?: String;
    name?: String;
    password?: String;
    role?: String;
    surname?: String;
    username: String;
}