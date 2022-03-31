import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}/`);
});
