import Koa from 'koa';

import router from './router.js';
import config from './config/index.js';
import { dbGateway, setup } from '@chrishontoir/fs-common';

const app = new Koa();

setup(app, config);
dbGateway(app, config);

app.use(router.routes());
app.use(router.allowedMethods());
