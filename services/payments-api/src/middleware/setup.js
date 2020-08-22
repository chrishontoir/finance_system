import http from 'http';

const setup = (app, config) => {
    app.context.API_CODE = config.code,
    app.context.API_NAME = config.name

    http.createServer(app.callback()).listen(config.port, () => {
        console.log(`${config.name} running on port ${config.port}`);
    });
}

export default setup;
