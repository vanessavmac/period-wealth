import express from 'express'
import cors from 'cors';

import api from './api/routes.js';

const app = express();

// /**
//  * @brief express body handler Middleware:
//  * This converts the body of POST and PUT requests to
//  * json
//  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// TODO: Add sessions
// https://github.com/gx0r/connect-session-knex/blob/main/examples/example-postgres.js
// https://github.com/expressjs/session
// https://www.npmjs.com/package/connect-session-knex?activeTab=readme

// /**
//  * @brief CORS:
//  * CORS aka Cross Origin Resource Sharing
//  * This enables us to tell browsers which
//  * domains are allowed to request resources
//  * from our server. These domains are indicated by the origin
//  * array provided. This only applies to web browsers,
//  * CORS will not block requests from places like CURL, postman, or other web servers.
//  */
app.use(
  cors({
    origin: [
      /^http:\/\/localhost:[0-9]{4}$/,
    ],
  })
);

app.use('/api', api);

export default app;