const SUCCESS_CODE = '002';

const success = {
    body: {
        addIdentifier: ctx => ctx.body = { account: ctx.state.account, ...ctx.body, code: `${ctx.API_CODE}_${SUCCESS_CODE}` },
        addTimestamp: ctx => ctx.body = { ...ctx.body, timestamp: new Date(), code: `${ctx.API_CODE}_${SUCCESS_CODE}` }
    },
    log: ctx => {
        console.log({ 
            code: `${ctx.API_CODE}_${SUCCESS_CODE}`, 
            message: 'Successful', 
            origin: 'payments-api', 
            account: ctx.state.account 
        });
    }
}

export default success;
