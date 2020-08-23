import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';

import { middleware } from '@chrishontoir/fs-common';
import { user } from './controllers/index.js';

const router = new Router();

router.get('/user', middleware(), user.get);

router.post('/user', bodyParser(), middleware, user.post);

export default router;