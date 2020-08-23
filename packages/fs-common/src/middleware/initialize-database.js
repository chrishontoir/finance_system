import pgp from 'pg-promise';

const initializeDatabase = async (app, config) => {
    app.context.db = pgp()(config.database);
}

export default initializeDatabase;
