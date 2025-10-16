import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

// ✅ Habilita CORS para cualquier origen
app.use(cors({ origin: "*" }));

app.get("/api/ruc/:ruc", async (req, res) => {
  const ruc = req.params.ruc;
  const token = "sk_10921.ytFcmj7MvF6ZVKoEKmL9P2aAixNO8fRV";
  const response = await fetch(`https://api.decolecta.com/v1/sunat/ruc?numero=${ruc}`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));


