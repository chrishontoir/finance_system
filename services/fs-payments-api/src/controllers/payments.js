import { getPayments, postPayment } from '../service/index.js';

const payments = {
    get: async ctx => {
        const payments = await getPayments(ctx);
        ctx.state.log.push(`${payments.length} payments retrieved`);
        ctx.body = {
            payments
        }
    },
    post: async ctx => {
        await postPayment(ctx);
        ctx.state.log.push(`1 payment added`);
        await payments.get(ctx);
    }
}

export default payments;