const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/user.route");
const https = require("https");
const fs = require("fs");

require("./config/db");
require("dotenv").config({ path: "./config/.env" });

app.use(express.json());
//app.use(cors);

// Routes
app.use("/api/user", userRoutes);

const PORT = process.env.PORT;

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
