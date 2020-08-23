import { success } from '../responses/index.js'
import chalk from 'chalk';

const REQUEST = chalk.cyan('REQUEST');
const SUCCESS = chalk.green('200');
const RES = chalk.dim('RES');

const responseLogger = async (ctx, next) => {
    const start = new Date();
    console.log(`\n${REQUEST}  ${ctx.method.toUpperCase()}  ${ctx.request.url}  ${start.toISOString()}`)
    await next();
    if (ctx.response.status === 200) {
        const end = new Date();
        const ELAPSED = chalk.yellow(`${end - start}ms`);
        console.log(`${RES} ${SUCCESS}  ${ctx.method.toUpperCase()}  ${ctx.request.url}  ${end.toISOString()}  ${ELAPSED}`)
        success.body.addCode(ctx);
    };
}

export default responseLogger;
