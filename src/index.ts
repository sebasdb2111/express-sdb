import mongoose from 'mongoose';

// tslint:disable-next-line:no-var-requires
const app = require('./app');
const port = 3800;

// Database connection
mongoose.Promise = global.Promise;
const promise = mongoose.createConnection('mongodb://localhost:27017/MyFavoriteAppliances?authSource=admin', {
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
    .catch((err) => console.log(err)
);
