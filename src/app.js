const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile("index.html");
});

app.listen(3000, function () {
  console.log("🚀 Server up and running on port 3000");
});
