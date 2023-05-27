const express = require("express");
const app = express();
// const server = require("http").createServer(app);
// const io = require("socket.io")(server);
const path = require("path");
// const { disconnect } = require("process");
const router = require('./routers/router')

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});






app.use('/api', router);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, {err: err});
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(3000, () => {
  console.log("Starting at", 3000);
});


module.exports = app;