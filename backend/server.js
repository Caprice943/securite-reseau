const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/user.route");

require("./config/db");
require("dotenv").config({ path: "./config/.env" });

app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
