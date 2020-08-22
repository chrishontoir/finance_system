import http from 'http';
import Koa from 'koa';
import router from './router.js';
import config from './config/index.js'

const app = new Koa();
const port = config.port;

app.use(router.routes());
app.use(router.allowedMethods());

http.createServer(app.callback()).listen(port, () => {
    console.log(`Payments API running on port ${port}`)
});