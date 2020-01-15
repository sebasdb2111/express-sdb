"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// tslint:disable-next-line:no-var-requires
const app = require('./app');
const port = 3800;
// Database connection
mongoose_1.default.Promise = global.Promise;
const promise = mongoose_1.default.createConnection('mongodb://localhost:27017/MyFavoriteAppliances?authSource=admin', {
    useMongoClient: true
});
promise
    .then(() => {
    // tslint:disable-next-line:no-console
    console.log('Database conection Ok');
    // Server creation
    app.listen(port, () => {
        // tslint:disable-next-line:no-console
        console.log('Server running in http://localhost:3800');
    });
})
    // tslint:disable-next-line:no-console
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map