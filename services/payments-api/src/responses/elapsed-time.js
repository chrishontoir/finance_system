import codes from './codes.js';

const elapsedTime = {
    log: ctx => {
        console.log({
            code: `${ctx.API_CODE}_${codes.elapsedTime}`,
            message: 'API Elapsed Time',
            origin: ctx.API_NAME,
            elapsed: ctx.state.elapsed
        });
    }
};

export default elapsedTime;
