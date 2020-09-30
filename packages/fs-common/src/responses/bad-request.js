import codes from './codes.js';

// Test

const badRequest = {
    body: ctx => {
        ctx.status = 400;
        ctx.body = {
            code: `${ctx.API_CODE}_${codes.badRequest}`,
            message: 'Bad Request'
        };
    },
    log: ctx => {
        console.log({
            code: `${ctx.API_CODE}_${codes.badRequest}`,
            message: 'Bad Request',
            origin: ctx.API_NAME,
            data: {
                reason: ctx.state.badRequest
            }
        });
    }
};

export default badRequest;
