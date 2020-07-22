'use strict';

import body from 'body-parser';
import { connectDB } from './Utils/DB/connect';

connectDB();
const app = require('router')();

app.use(body.json({ limit: '50mb' }));
app.use(require('./Middlewares/json'));

app.get('/', require('./Controllers/status'));

// Book
app.post('/book', require('./Controllers/Book/create-book'));
app.get('/book', require('./Controllers/Book/get-books'));

export default app;