import Router from '@koa/router';

import { middleware } from './middleware/index.js';
import { payments } from './controllers/index.js';

const router = new Router();

router.get('/payments', middleware, payments.get);

export default router;