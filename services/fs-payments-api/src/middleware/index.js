import compose from 'koa-compose';

import elapsed from './elapsed.js';
import identify from './identify.js';
import responseLogger from './response-logger.js';

const middleware = compose([
    elapsed,
    responseLogger,
    identify
]);

export {
    middleware
};
