import codes from './codes.js';

const success = {
    body: {
        addIdentifier: ctx => ctx.body = { [ctx.state.id.type]: ctx.state.id.value, ...ctx.body },
        addTimestamp: ctx => ctx.body = { ...ctx.body, timestamp: new Date() },
        addCode: ctx => ctx.body = { ...ctx.body, code: `${ctx.API_CODE}_${codes.success}`}
    },
    log: ctx => {
        console.log({ 
            code: `${ctx.API_CODE}_${codes.success}`, 
            message: 'Successful', 
            origin: ctx.API_NAME,
            data: {
                [ctx.state.id.type]: ctx.state.id.value,
                method: ctx.method,
                ...ctx.state.success
            }
        });
    }
};

export default success;
