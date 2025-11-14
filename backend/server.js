const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({ message: "Olá do backend via HTTP!" });
});

app.listen(3001, () => console.log("Backend rodando na porta 3001"));