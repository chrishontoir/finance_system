import compose from 'koa-compose';
import helmet from 'koa-helmet';

import initializeDatabase from './initialize-database.js';
import initializeService from './initialize-service.js';

import elapsed from './elapsed.js';
import identify from './identify.js';
import responseLogger from './response-logger.js';

const middleware = identityField => compose([
    helmet(),
    elapsed,
    identify(identityField),
    responseLogger
]);

export {
    initializeDatabase,
    initializeService,
    middleware
};