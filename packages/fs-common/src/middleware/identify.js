import { badRequest, success } from '../responses/index.js';
import chalk from 'chalk';

const BAD_REQ = chalk.red('400');

const identify = (field = { id: 'id' }) => async (ctx, next) => {
    ctx.state.id = {
        type: field.id,
        value: ctx.request.query[field.id]
    }
    if (!ctx.state.id.value) {
        ctx.state.badRequest = `No ${field.id.toUpperCase()} provided`
        badRequest.body(ctx);
        console.log(`RES ${BAD_REQ}  ${ctx.method.toUpperCase()}  ${ctx.request.url}  ${new Date().toISOString()}  ${ctx.state.badRequest}`)
        // badRequest.log(ctx);
        return;
    }
    await next();
    success.body.addIdentifier(ctx);
};

export default identify;
