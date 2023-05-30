const express = require("express");
const app = express();
const app2 = express();
const server = require("http").createServer(app);
const server2 = require("http").createServer(app2);
const io = require("socket.io")(server2);
const path = require("path");
const { disconnect } = require("process");
const router = require("./routers/router");
const cookieParser = require('cookie-parser');
const cors = require('cors');

// const { ERRORS } = require("socks/typings/common/constants");
app2.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app2.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app2.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index8082.html"));
});
app2.use('/public', express.static(path.join(__dirname,'../jsForWebsockets')));


app.use("/api", router);


////////not working////////
app.post('/storeInput', (req, res) => {
  console.log('in store input route', req);
    // const { name } = req.body;
    // console.log('Received name from client:', name);
  res.sendStatus(200); // Send a response back to the client
});
////////not working////////

io.on("connection", (socket) => {
  console.log('chat connection received by server');
  io.emit("connection", socket.id);//check connection
  socket.on("chat message", (msg, userName001) => {   //socket ....> subject
    io.emit("chat message", msg, userName001);
  });
});

app.use((req, res) => {
  res.status(404).send("invalid addr");
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


server2.listen(8082, () => {
  console.log("Starting at 8082");
});

server.listen(3000, () => {
  console.log("Starting at", 3000);
});


module.exports = app;
