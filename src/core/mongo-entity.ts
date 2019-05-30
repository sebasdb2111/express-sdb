import Mongoose from 'mongoose';

export class MongoEntity {
    _id: Mongoose.Types.ObjectId;
    __v?: number;
}