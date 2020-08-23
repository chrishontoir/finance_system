import { badRequest, success } from '../responses/index.js';

const identify = (field = { id: 'id' }) => async (ctx, next) => {
    ctx.state.id = {
        type: field.id,
        value: ctx.request.query[field.id]
    }
    if (!ctx.state.id.value) {
        ctx.state.badRequest = `No ${field.id.toUpperCase()} provided`
        badRequest.body(ctx);
        badRequest.log(ctx);
        return;
    }
    await next();
    success.body.addIdentifier(ctx);
};

export default identify;
