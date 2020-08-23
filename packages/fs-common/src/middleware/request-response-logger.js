import chalk from 'chalk';

const REQUEST = chalk.cyan('REQUEST');
const ELAPSED = chalk.magenta('ELAPSED');

const STATUS = ctx => {
    switch (ctx.response.status) {
        case 200:
            return chalk.green('SUCCESS');
        case 400:
            return chalk.red('BAD_REQ');
        case 401:
            return chalk.red('NO_AUTH');
        case 403:
            return chalk.red('REFUSED');
        case 500:
            return chalk.red('API_ERR');
    }
}

const formatElapsed = ctx => {
    const elapsed = ctx.state.elapsed;
    if (elapsed <= 20) return chalk.green(`${elapsed}ms`);
    if (elapsed <= 50) return chalk.yellow(`${elapsed}ms`);
    if (elapsed >= 51) return chalk.red(`${elapsed}ms`);
}

const formatMethod = ctx => {
    return chalk.yellow(ctx.method.toUpperCase().padEnd(4));
}

const formatDateTime = dateTime => {
    return chalk.dim(dateTime.toISOString());
}

const formatRequestUrl = ctx => {
    return ctx.request.url.replace('/', '').padEnd(25);
}

const formatLogData = ctx => {
    return ctx.state.log ? `| ${chalk.dim(ctx.state.log.join(', '))}` : '';
}

const log = {
    request: ctx => console.log('\n' + `${REQUEST} | ${formatMethod(ctx)} | ${formatDateTime(ctx.state.start)} | ${formatRequestUrl(ctx)}`),
    response: ctx => console.log(`${STATUS(ctx)} | ${formatMethod(ctx)} | ${formatDateTime(ctx.state.end)} | ${formatRequestUrl(ctx)} ${formatLogData(ctx)}`),
    elapsed: ctx => console.log(`${ELAPSED} | ${formatMethod(ctx)} | ${formatDateTime(ctx.state.end)} | ${formatRequestUrl(ctx)} | ${formatElapsed(ctx)}`)
}

const requestResponseLogger = async (ctx, next) => {
    ctx.state.log = [];
    ctx.state.start = new Date();
    log.request(ctx);

    await next();

    ctx.state.end = new Date();
    ctx.state.elapsed = ctx.state.end - ctx.state.start;
    log.response(ctx);
    log.elapsed(ctx);
};

export default requestResponseLogger;
