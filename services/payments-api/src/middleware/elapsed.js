import { elapsedTime, success } from '../responses/index.js';

const elapsed = async (ctx, next) => {
    const start = new Date();
    await next();
    const end = new Date();
    const elapsed = end - start;
    ctx.state.elapsed = elapsed;
    if (ctx.response.status === 200) {
        success.body.addTimestamp(ctx);
    }
    elapsedTime.log(ctx);
}

export default elapsed;