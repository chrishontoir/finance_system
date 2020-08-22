import codes from './codes.js';

const success = {
    body: {
        addIdentifier: ctx => ctx.body = { id: ctx.state.id, ...ctx.body },
        addTimestamp: ctx => ctx.body = { ...ctx.body, timestamp: new Date() },
        addCode: ctx => ctx.body = { ...ctx.body, code: `${ctx.API_CODE}_${codes.success}`}
    },
    log: ctx => {
        console.log({ 
            code: `${ctx.API_CODE}_${codes.success}`, 
            message: 'Successful', 
            origin: ctx.API_NAME,
            data: {
                id: ctx.state.id,
                ...ctx.state.success
            }
        });
    }
};

export default success;
