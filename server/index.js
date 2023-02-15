require('dotenv').config({path: '../.env'});
import express from "express";
import cors from "cors";
const https = require('https')

// import api from './api';

const app = express();
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
app.use(cors());
