'use strict';

import body from 'body-parser';

const app = require('router')();

app.use(body.json({ limit: '50mb' }));
app.use(require('./Middlewares/json'));

app.get('/', require('./Controllers/status'));

export default app;