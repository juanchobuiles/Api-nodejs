const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
//Envairoments variables
const { ENV, PORT } = process.env;

//Routes
app.get("/", (request, response) => {
  response.send("!Hola mundo!");
});
app.post("/quotes", (request, response) => {
  response.json({ data: "ok" });
});
app.put("/quotes", (request, response) => {
  response.json({ data: "ok" });
});
app.delete("/quotes", (request, response) => {
  response.json({ data: "ok" });
});

//Start server
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`servidor funcionando puerto ${PORT}`);
});
