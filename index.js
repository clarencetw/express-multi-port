const express = require("express");

const PORTS = [8888, 8080, 8000, 80];
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
  res.send(`<h1>Web App</h1><p>Port = ${req.headers.host}</p>`);
});

PORTS.forEach((PORT) => {
  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
});
