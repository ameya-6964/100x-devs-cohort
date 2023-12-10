const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Mounting todoRoutes
app.get("/", (req, res) => {
  res.send("<h1> Hello </h1>");
});
app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
