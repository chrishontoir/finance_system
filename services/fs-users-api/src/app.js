import Koa from 'koa';

import router from './router.js';
import config from './config/index.js';
import { initializeDatabase, initializeService } from '@chrishontoir/fs-common';

const app = new Koa();

initializeService(app, config);
initializeDatabase(app, config);

app.use(router.routes());
app.use(router.allowedMethods());
