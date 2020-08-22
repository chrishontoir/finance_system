import Router from '@koa/router';
import { payments } from './controllers/index.js'

const router = new Router();

router.get('/', payments.get);

export default router;