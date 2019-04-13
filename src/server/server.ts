import * as compression from 'compression';
import * as express from 'express';
import expressPromiseRouter from 'express-promise-router';
import * as path from 'path';

const app = express();
const port = process.env.PORT || 3000;

const router = expressPromiseRouter({
    caseSensitive: true,
    strict: true,
});

app.use(router);

app.listen(port);

router.use(compression());

router.use('/public', express.static(path.join(__dirname, 'public')));
router.use('*', express.static(path.join(__dirname, 'public')));

// tslint:disable-next-line
console.info(`Server is running on port: ${port}`);
