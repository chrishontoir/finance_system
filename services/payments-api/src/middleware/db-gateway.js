import pgp from 'pg-promise';

const dbGateway = async (app, config) => {
    app.context.db = pgp()(config.database);
}

export default dbGateway;
