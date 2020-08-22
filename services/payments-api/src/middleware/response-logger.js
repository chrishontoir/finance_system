import { success } from '../responses/index.js'

const responseLogger = async (ctx, next) => {
    await next();
    if (ctx.response.status === 200) success.log(ctx);
}

export default responseLogger;
