const payments = {
    get: ctx => {
        const account = ctx.state.account;
        const payments = [];
        ctx.body = {
            payments
        }
    }
}

export default payments;