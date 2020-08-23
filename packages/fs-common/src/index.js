import { initializeDatabase, initializeService, middleware } from './middleware/index.js';
import { badRequest, elapsedTime, success } from './responses/index.js';

const response = { badRequest, elapsedTime, success };

export {
    initializeDatabase,
    initializeService,
    middleware,
    response
};
