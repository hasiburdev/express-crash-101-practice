const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./pages/index.html", (error, data) => {
    if (error) {
      console.log(error);
      res.send(`<h1>Something went wrong!`);
    } else {
      res.write(data);
      res.end();
    }
  });
});
app.get("/api", (req, res) => {
  res.json({
    message: "Successfully Deployed!",
  });
});

app.use((req, res, next) => {
  const error = new Error("404 Not Found!");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  console.error(error);
  if (error) {
    return res.status(error.status).send(error.message);
  } else res.status(500).send("Something went wrong!");
});

app.listen(4000);
