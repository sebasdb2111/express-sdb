"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const util_1 = require("util");
class AbstractMongoDao {
    getModel() {
        console.log('model', this.model);
        if (util_1.isNullOrUndefined(this.model)) {
            console.log('model 111111');
            this.model = mongoose_1.default.model(this.getCollectionName(), this.getSchema());
        }
        console.log('model 22222');
        return this.model;
    }
    getSchema() {
        console.log('schema', this.schema);
        if (util_1.isNullOrUndefined(this.schema)) {
            console.log('schema 111111');
            this.schema = new mongoose_1.Schema(this.getSchemaDefinition());
        }
        console.log('schema 2222');
        return this.schema;
    }
    /**
     * Retrieves all the collection documents
     *
     * @returns array of elements found
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = (yield this.getModel().find().exec()).map((doc) => doc.toObject());
            return Promise.resolve(results);
        });
    }
    /**
     * @param filter filter params
     * @returns array of elements found
     */
    findById(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getModel().findById(filter).exec();
                return Promise.resolve(result ? result.toObject() : null);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.AbstractMongoDao = AbstractMongoDao;
//# sourceMappingURL=abstractMongoDao.js.map