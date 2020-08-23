import { badRequest, success } from '../responses/index.js';

const identify = async (ctx, next) => {
    ctx.state.id = ctx.request.query.account;
    if (!ctx.state.id) {
        ctx.state.badRequest = 'No Account Provided'
        badRequest.body(ctx);
        badRequest.log(ctx);
        return;
    }
    await next();
    success.body.addIdentifier(ctx);
};

export default identify;
