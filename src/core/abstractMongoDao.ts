'use strict';
import mongoose, { Document, Model, model, Schema, SchemaDefinition } from 'mongoose';
import { isNullOrUndefined } from 'util';
import { MongoEntity } from './mongo-entity';

export abstract class AbstractMongoDao<T extends MongoEntity> {

    // private schema: Schema;
    private model: Model<Document>;

    protected getModel(): Model<Document> {
        if (isNullOrUndefined(this.model)) {
            this.model = mongoose.model(this.getCollectionName(), this.getSchema());
        }
        return this.model;
    }

    protected getSchema(): Schema {
        // tslint:disable-next-line:new-parens
        const schema = mongoose.Schema;
        const entitySchema = new schema(this.getSchemaDefinition());
        // if (isNullOrUndefined(this.schema)) {
            // this.schema = new Schema(this.getSchemaDefinition());
        // }
        return entitySchema;
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
        const result: Document = await this.getModel().findById(id).exec();
        const a = result;
        return Promise.resolve(result ? result.toObject() as T : null);
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
        const result: Document = await this.getModel().findByIdAndUpdate(filterId, {$set: {...model} }, {new: true}).exec();
        return Promise.resolve(result ? result.toObject() as T : null);
    }

}