const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");

connectToMongo();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8181;

app.get("/api", (req, res) => {
  res.send("Hi!!");
});

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/deploy", require("./routes/deploy"));
app.use("/api/projects", require("./routes/projects"));

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
