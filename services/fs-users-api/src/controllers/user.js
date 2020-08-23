import { getUser } from '../services/index.js';

const user = {
    get: async ctx => {
        const user = await getUser(ctx);
        ctx.state.log.push(`${user.status || 'Unknown'}`)
        ctx.body = {
            user
        }
    },
    post: async ctx => {
        // await postUser(ctx);
        // await user.get(ctx);
    }
}

export default user;