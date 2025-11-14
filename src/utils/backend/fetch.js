const API_BASE = "http://localhost:3000";

// GET /health
export async function getHealth() {
  const res = await fetch(`${API_BASE}/health`);
  return res.json();
}

// POST /api/users
// body: { name, age?, weight?, height? }
export async function createUser(data) {
  const res = await fetch(`${API_BASE}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

// GET /api/users/:userId
export async function getUser(userId) {
  const res = await fetch(`${API_BASE}/api/users/${userId}`);
  return res.json();
}

// PUT /api/users/:userId
// body example: { age: 25 } or { weight: 70.5 } or multiple fields
export async function updateUser(userId, data) {
  const res = await fetch(`${API_BASE}/api/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

// GET /api/users/:userId/weight
export async function getWeightHistory(userId) {
  const res = await fetch(`${API_BASE}/api/users/${userId}/weight`);
  return res.json();
}
// GET /api/users/:userId/height
export async function getHeightHistory(userId) {
  const res = await fetch(`${API_BASE}/api/users/${userId}/height`);
  return res.json();
}

// GET /api/users/:userId/complete
export async function getCompleteHistory(userId) {
  const res = await fetch(`${API_BASE}/api/users/${userId}/complete`);
  return res.json();
}
