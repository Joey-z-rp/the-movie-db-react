import * as compression from 'compression';
import * as express from 'express';
import expressPromiseRouter from 'express-promise-router';
import * as path from 'path';
import { getMovieDetails, getPopularMovie } from './api/movie';
import { getMovieSearchResult } from './api/search';

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
router.get('/api/movie/:id', getMovieDetails);
router.get('/api/search/movie', getMovieSearchResult);

router.use('/public', express.static(path.join(__dirname, 'public')));
router.use('*', express.static(path.join(__dirname, 'public')));

// tslint:disable-next-line
console.info(`Server is running on port: ${port}`);
