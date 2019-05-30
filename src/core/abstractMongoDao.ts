import mongoose, { Document, Model, Schema, SchemaDefinition } from 'mongoose';
import { isNullOrUndefined } from 'util';
import { MongoEntity } from './mongo-entity';

export abstract class AbstractMongoDao<T extends MongoEntity> {
    private schema: Schema;
    private model: Model<Document>;

    protected getModel(): Model<Document> {
        if (isNullOrUndefined(this.model)) {
            this.model = mongoose.model(this.getCollectionName(), this.getSchema());
        }
        return this.model;
    }

    protected getSchema(): Schema {
        if (isNullOrUndefined(this.schema)) {
            const Schema = mongoose.Schema;
            this.schema = new Schema(this.getSchemaDefinition());
        }
        return this.schema;
    }

    protected abstract getSchemaDefinition(): SchemaDefinition;

    protected abstract getCollectionName(): string;

    /**
     * Retrieves all the collection documents
     *
     * @returns array of elements found
     */
    public async findAll(): Promise<T[]> {
        const results: T[] = (await this.getModel().find().exec()).map((doc) => doc.toObject());
        return Promise.resolve(results);
    }

    /**
     * @param filter filter params
     * @returns array of elements found
     */
    public async findOne(filter: T): Promise<T> {
        const result: Document = await this.getModel().findOne(filter).exec();
        return Promise.resolve(result ? result.toObject() as T : null);
    }
    /**
     * @param filter filter params
     * @returns array of elements found
     */
    public async findById(id: any): Promise<T> {
        try {
            const result: Document = await this.getModel().findById(id).exec();
            return Promise.resolve(result ? result.toObject() as T : null);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    /**
     * Save new document
     * @param entity object to save in the database
     */
    public async save(entity: T): Promise<T> {
        const result: Document = await this.getModel().create(entity);
        return Promise.resolve(result ? result.toObject() as T : null);
    }

    /**
     * Update a adocument
     * @param model
     * @param filterId
     */
    public async update(model: MongoEntity, filterId: string): Promise<T> {
        const result: Document = await this.getModel().findByIdAndUpdate(filterId, { $set: { ...model } }, { new: true }).exec();
        return Promise.resolve(result ? result.toObject() as T : null);
    }

}