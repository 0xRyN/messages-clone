const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    socket.on("add-user", (req) => {
        io.emit("user-joined", req);
    });

    socket.on("new-message", (req) => {
        io.emit("new-message", req);
    });
});

httpServer.listen(8000);
