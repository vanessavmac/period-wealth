import app from './app.js'

// .env variables available in the docker environment
const port = process.env.API_PORT;

app.listen(port, () => {
    console.log("server listening at port " + port);
  });