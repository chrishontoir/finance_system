const BAD_REQUEST_CODE = '003';

const badRequest = {
    body: ctx => {
        ctx.status = 400;
        ctx.body = {
            code: `${ctx.API_CODE}_${BAD_REQUEST_CODE}`,
            message: 'Bad Request'
        };
    },
    log: ctx => {
        console.log({
            code: `${ctx.API_CODE}_${BAD_REQUEST_CODE}`,
            message: 'Bad Request',
            origin: 'payments-api',
            reason: ctx.state.badRequest
        });
    }
}

export default badRequest;