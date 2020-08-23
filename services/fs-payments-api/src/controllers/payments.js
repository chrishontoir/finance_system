import { getPayments, postPayment } from '../service/index.js';

const payments = {
    get: async ctx => {
        const payments = await getPayments(ctx);
        ctx.state.success = { noOfPayments: payments.length }
        ctx.body = {
            payments
        }
    },
    post: async ctx => {
        await postPayment(ctx);
        await payments.get(ctx);
    }
}

export default payments;