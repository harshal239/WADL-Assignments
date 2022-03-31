const express = require("express");
const app = express();
const port = 4000;

app.use(express.static("public"));

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}/ `);
});
