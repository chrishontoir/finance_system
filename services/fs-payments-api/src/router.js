import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';

import { middleware } from '@chrishontoir/fs-common';
import { payments } from './controllers/index.js';

const router = new Router();

router.get(
    '/payments', 
    middleware({ id: 'account' }), 
    payments.get
);

router.post(
    '/payments', 
    bodyParser(), 
    middleware({ id: 'account' }), 
    payments.post
);

export default router;