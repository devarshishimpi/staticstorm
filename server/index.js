const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");

connectToMongo();

const app = express();
app.use(express.json());

// Enable CORS for specific routes
const corsOptions = {
  origin: "http://staticstorm.repocraft.com", // Replace with the allowed origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies and credentials to be sent
  optionsSuccessStatus: 204, // Respond to preflight requests with a 204 status code
};
app.use("/api/auth", cors(corsOptions));
app.use("/api/deploy", cors(corsOptions));
app.use("/api/projects", cors(corsOptions));

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
