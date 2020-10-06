const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use("/api/items", items);
app.use(express.static("client/build"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to DB successfully"))
  .catch((err) => console.log("Error in connecting to DB", err));

app.listen(PORT, () => console.log("Server started on Port ", PORT));
