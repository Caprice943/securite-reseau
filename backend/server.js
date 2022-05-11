const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/user.route");
//const https = require("https");
//const fs = require("fs");

require("./config/db");
require("dotenv").config({ path: "./config/.env" });

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  preflightContinued: false,
};

app.use(cors(corsOptions));
app.use(express.json());
// Routes
app.use("/api/user", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/*
https
  .createServer(
    {
      key: fs.readFileSync("./cert/server.key"),
      cert: fs.readFileSync("./cert/server.cert"),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
*/
