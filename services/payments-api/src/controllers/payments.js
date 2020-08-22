import { getPayments } from '../service/index.js';

const payments = {
    get: ctx => {
        const payments = getPayments(ctx.state.id);
        ctx.state.success = { noOfPayments: payments.length }
        ctx.body = {
            payments
        }
    }
}

export default payments;