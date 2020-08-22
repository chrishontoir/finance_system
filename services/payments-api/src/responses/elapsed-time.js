const ELAPSED_TIME_CODE = '001';

const elapsedTime = {
    log: ctx => {
        console.log({
            code: `${ctx.API_CODE}_${ELAPSED_TIME_CODE}`,
            message: 'API Elapsed Time',
            origin: 'payments-api',
            elapsed: ctx.state.elapsed
        });
    }
};

export default elapsedTime;
