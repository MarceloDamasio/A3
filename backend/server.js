import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Rota de saúde
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Simulação de banco na memória
const users = {};

// Criar usuário
app.post("/api/users", (req, res) => {
  const id = Date.now().toString();
  users[id] = { id, ...req.body, weightHistory: [], heightHistory: [] };
  res.json(users[id]);
});

// Buscar usuário
app.get("/api/users/:userId", (req, res) => {
  res.json(users[req.params.userId] || {});
});

// Atualizar usuário
app.put("/api/users/:userId", (req, res) => {
  const id = req.params.userId;
  users[id] = { ...users[id], ...req.body };
  res.json(users[id]);
});

// Histórico peso
app.get("/api/users/:userId/weight", (req, res) => {
  res.json(users[req.params.userId]?.weightHistory || []);
});

// Histórico altura
app.get("/api/users/:userId/height", (req, res) => {
  res.json(users[req.params.userId]?.heightHistory || []);
});

// Histórico completo
app.get("/api/users/:userId/complete", (req, res) => {
  res.json(users[req.params.userId] || {});
});

// Inicia servidor
app.listen(3000, () => console.log("Backend rodando na porta 3000"));
