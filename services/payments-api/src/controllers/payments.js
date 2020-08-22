const payments = {
    get: ctx => {
        const payments = [];
        ctx.body = {
            payments
        }
    }
}

export default payments;