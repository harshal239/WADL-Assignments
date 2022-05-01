const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const UserRouter = require("./routes/UserRouter");
const connectDB = require("./db/connect");
const cors = require("cors");
require("dotenv/config");

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/users", UserRouter);

const start = async () => {
  try {
    await connectDB(process.env.CONNECT_DB);
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}/`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
