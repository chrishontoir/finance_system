import { getPayments, postPayment } from '../service/index.js';

const payments = {
    get: ctx => {
        const payments = getPayments(ctx.state.id);
        ctx.state.success = { noOfPayments: payments.length }
        ctx.body = {
            payments
        }
    },
    post: ctx => {
        postPayment(ctx.state.id, ctx.request.body);
        payments.get(ctx);
    }
}

export default payments;