const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("What is socket: ", socket);
  console.log("Socket is active to be connected !!");

  // server is listening to an socket event that going to recieved by client
  socket.on("chat", (payload) => {
    console.log("What is payload: ", payload);

    // respond to the recieved socket event
    io.emit("chat", payload);
  });
});

// this is not how we create a listening server on this.
//app.listen(5000, () => console.log("server is running.."));

// below changes done for integrating api's
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const testRoutes = require("./testRoutes");
app.use("/api", testRoutes);
// end of changes required for api integration

server.listen(5000, () => {
  console.log("Server is running at port 5000...");
});
