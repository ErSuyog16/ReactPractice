const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", function (req, res) {
  res.json({ message: "suyog from server" });
});

app.listen(8000, () => {
  console.log("server listening on port 8000");
});
