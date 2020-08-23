import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';

import { middleware } from './middleware/index.js';
import { payments } from './controllers/index.js';

const router = new Router();

router.get('/payments', middleware, payments.get);

router.post('/payments', bodyParser(), middleware, payments.post);

export default router;