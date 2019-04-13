import * as compression from 'compression';
import * as express from 'express';
import expressPromiseRouter from 'express-promise-router';
import * as path from 'path';
import { getPopularMovie } from './api/movie';

const app = express();
const port = process.env.PORT || 3000;

if (!process.env.API_KEY) {
    // tslint:disable-next-line
    console.error('API key missing, exiting...');
    process.exit();
}

const router = expressPromiseRouter({
    caseSensitive: true,
    strict: true,
});

app.use(router);

app.listen(port);

router.use(compression());

// Pass API key to subsequent middleware
router.use((req, res, next) => {
    req.apiKey = process.env.API_KEY;
    next();
});

// API
router.get('/api/movie/popular', getPopularMovie);

router.use('/public', express.static(path.join(__dirname, 'public')));
router.use('*', express.static(path.join(__dirname, 'public')));

// tslint:disable-next-line
console.info(`Server is running on port: ${port}`);
