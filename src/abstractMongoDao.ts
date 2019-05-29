import mongoose, { Document, Model, Schema, SchemaDefinition } from 'mongoose';
import { isNullOrUndefined } from 'util';

export abstract class AbstractMongoDao<T> {

    private schema: Schema;
    private model: Model<Document>;

    protected getModel(): Model<Document> {
        console.log('model', this.model);
        if (isNullOrUndefined(this.model)) {
            console.log('model 111111');
            this.model = mongoose.model(this.getCollectionName(), this.getSchema());
        }
        console.log('model 22222');
        return this.model;
    }

    protected getSchema(): Schema {
        console.log('schema', this.schema);
        if (isNullOrUndefined(this.schema)) {
            console.log('schema 111111');
            this.schema = new Schema(this.getSchemaDefinition());
        }
        console.log('schema 2222');
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
    public async findById(filter: T): Promise<T> {
        try {
            const result: Document = await this.getModel().findById(filter).exec();
            return Promise.resolve(result ? result.toObject() as T : null);
        } catch (error) {
            return Promise.reject(error);
        }
    }

}