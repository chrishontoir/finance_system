import Koa from 'koa';

import router from './router.js';
import config from './config/index.js';
import { setup } from './middleware/index.js';

const app = new Koa();

setup(app, config);

app.use(router.routes());
app.use(router.allowedMethods());
