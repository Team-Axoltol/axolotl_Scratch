const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require("path");
const { disconnect } = require("process");
const router = require("./routers/router");
// const session = require ('express-session');
// const { ERRORS } = require("socks/typings/common/constants");

app.use(express.urlencoded({extended: false}));
// app.use(session({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false,
// }))

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/api", router);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat message", (msg2) => {
    console.log(msg2);
  });
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, { err: err });
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

server.listen(3000, () => {
  console.log("Starting at", 3000);
});

// server.listen(3351, () => {
//   console.log("Starting at", 3351);
// });

module.exports = app;
