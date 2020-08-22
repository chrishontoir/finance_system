import Router from '@koa/router';

import { payments } from './controllers/index.js'
import middleware from './middleware/index.js'

const router = new Router();

router.get('/payments', middleware, payments.get);

export default router;