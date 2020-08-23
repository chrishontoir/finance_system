import compose from 'koa-compose';
import helmet from 'koa-helmet';

import initializeDatabase from './initialize-database.js';
import initializeService from './initialize-service.js';

import elapsed from './elapsed.js';
import identify from './identify.js';
import requestResponseLogger from './request-response-logger.js';

const middleware = identityField => compose([
    helmet(),
    requestResponseLogger,
    identify(identityField)
]);

export {
    initializeDatabase,
    initializeService,
    middleware
};