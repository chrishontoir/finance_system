import { getUser } from '../services/index.js';

const user = {
    get: async ctx => {
        const user = await getUser(ctx);
        ctx.state.success = { status: user.status || 'NOT FOUND' }
        ctx.body = {
            user
        }
    },
    post: async ctx => {
        // await postPayment(ctx);
        // await user.get(ctx);
    }
}

export default user;