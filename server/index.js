const express = require("express");
const cors = require("cors");
const https = require("https");
const { Pool } = require("pg");
const pool = new Pool();

// import api from './api';

const app = express();
// .env variables available in the docker environment
const port = process.env.PORT;

// /**
//  * @brief express body handler Middleware:
//  * This converts the body of POST and PUT requests to
//  * json
//  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
      /^http:\/\/localhost:[0-9]{4}$/, // CLIENT_URI should hold the cms client uri
    ],
  })
);

app.get("/test", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT NOW()");
    res.status(200).send(rows[0].now);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log("server listening at port " + port);
});
