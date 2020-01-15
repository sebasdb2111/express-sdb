import bodyParser from 'body-parser';
import express from 'express';

const router = express();

// Load Routes
// const userRoutes = require('./user/user.routes');
import UserRoutes from './user/user.routes';

// Middlewares
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// cors
router.use((req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

// Routes
router.use('/api', UserRoutes);

module.exports = router;
