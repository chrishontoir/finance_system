import { badRequest, success } from '../responses/index.js';

const identify = async (ctx, next) => {
    ctx.state.account = ctx.request.query.account;
    if (!ctx.state.account) {
        ctx.state.badRequest = 'No Account Provided'
        badRequest.body(ctx);
        badRequest.log(ctx);
        return;
    }
    await next();
    success.body.addIdentifier(ctx);
}

export default identify;
