import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { execSync } from "child_process";

const app = express();
const PORT = 3000;
const TOKEN = "sk_10921.ytFcmj7MvF6ZVKoEKmL9P2aAixNO8fRV";

app.use(cors({ origin: "*" }));

// Función para obtener IP usando tu comando Linux
function obtenerIPLinux() {
  try {
    const ip = execSync("hostname -I | awk '{print $1}'").toString().trim();
    return ip;
  } catch (error) {
    console.error("Error obteniendo IP:", error.message);
    return null;
  }
}

// Endpoint para consultar RUC
app.get("/api/ruc/:ruc", async (req, res) => {
  const ruc = req.params.ruc;
  
  if (!/^\d{11}$/.test(ruc)) {
    return res.status(400).json({ error: "El RUC debe tener 11 dígitos" });
  }
  
  try {
    const response = await fetch(`https://api.decolecta.com/v1/sunat/ruc?numero=${ruc}`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error en la API: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error consultando RUC:", error);
    res.status(500).json({ error: "Error en la consulta del RUC" });
  }
});

// Endpoint para consultar DNI
app.get("/api/dni/:dni", async (req, res) => {
  const dni = req.params.dni;
  
  if (!/^\d{8}$/.test(dni)) {
    return res.status(400).json({ error: "El DNI debe tener 8 dígitos" });
  }
  
  try {
    const response = await fetch(`https://api.decolecta.com/v1/reniec/dni?numero=${dni}`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error en la API: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error consultando DNI:", error);
    res.status(500).json({ error: "Error en la consulta del DNI" });
  }
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  const ipLAN = obtenerIPLinux();
  
  console.log("🚀 Servidor de Consultas RUC/DNI corriendo");
  console.log(`   Local: http://${ipLAN}:${PORT}`);
  
  if (ipLAN) {
    console.log(`   Red LAN: http://${ipLAN}:${PORT}`);
  }
  
  console.log("\n📚 Endpoints:");
  console.log(`   • RUC: GET /api/ruc/:ruc`);
  console.log(`   • DNI: GET /api/dni/:dni\n`);
});




// ---

// ## 📦 Salida esperada:
// ```
// Servidor de Consultas RUC/DNI corriendo
//    Local: http://localhost:3000
//    Red LAN: http://192.168.1.105:3000

// Endpoints:
//    • RUC: GET /api/ruc/:ruc
//    • DNI: GET /api/dni/:dni

// import express from "express";
// import fetch from "node-fetch";
// import cors from "cors";

// const app = express();

// // ✅ Habilita CORS para cualquier origen
// app.use(cors({ origin: "*" }));

// // Endpoint para consultar RUC
// app.get("/api/ruc/:ruc", async (req, res) => {
//   const ruc = req.params.ruc;
//   const token = "sk_10921.ytFcmj7MvF6ZVKoEKmL9P2aAixNO8fRV";
  
//   // Validar que el RUC tenga 11 dígitos
//   if (!/^\d{11}$/.test(ruc)) {
//     return res.status(400).json({ error: "El RUC debe tener 11 dígitos" });
//   }
  
//   try {
//     const response = await fetch(`https://api.decolecta.com/v1/sunat/ruc?numero=${ruc}`, {
//       headers: {
//         "Accept": "application/json",
//         "Authorization": `Bearer ${token}`
//       }
//     });
    
//     if (!response.ok) {
//       throw new Error(`Error en la API: ${response.status}`);
//     }
    
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error("Error consultando RUC:", error);
//     res.status(500).json({ error: "Error en la consulta del RUC" });
//   }
// });

// // Nuevo endpoint para consultar DNI
// app.get("/api/dni/:dni", async (req, res) => {
//   const dni = req.params.dni;
//   const token = "sk_10921.ytFcmj7MvF6ZVKoEKmL9P2aAixNO8fRV";
  
//   // Validar que el DNI tenga 8 dígitos
//   if (!/^\d{8}$/.test(dni)) {
//     return res.status(400).json({ error: "El DNI debe tener 8 dígitos" });
//   }
  
//   try {
//     const response = await fetch(`https://api.decolecta.com/v1/reniec/dni?numero=${dni}`, {
//       headers: {
//         "Accept": "application/json",
//         "Authorization": `Bearer ${token}`
//       }
//     });
    
//     if (!response.ok) {
//       throw new Error(`Error en la API: ${response.status}`);
//     }
    
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error("Error consultando DNI:", error);
//     res.status(500).json({ error: "Error en la consulta del DNI" });
//   }
// });

// ✅ Endpoint para consultar ambos (RUC o DNI según el parámetro)
/* app.get("/api/consultar/:numero", async (req, res) => {
  const numero = req.params.numero;
  const token = "sk_10921.ytFcmj7MvF6ZVKoEKmL9P2aAixNO8fRV";
  
  // Determinar si es RUC (11 dígitos) o DNI (8 dígitos)
  if (/^\d{11}$/.test(numero)) {
    // Es RUC
    try {
      const response = await fetch(`https://api.decolecta.com/v1/sunat/ruc?numero=${numero}`, {
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`Error en la API: ${response.status}`);
      }
      
      const data = await response.json();
      res.json({ tipo: "RUC", ...data });
    } catch (error) {
      console.error("Error consultando RUC:", error);
      res.status(500).json({ error: "Error en la consulta del RUC" });
    }
  } else if (/^\d{8}$/.test(numero)) {
    // Es DNI
    try {
      const response = await fetch(`https://api.decolecta.com/v1/reniec/dni?numero=${numero}`, {
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`Error en la API: ${response.status}`);
      }
      
      const data = await response.json();
      res.json({ tipo: "DNI", ...data });
    } catch (error) {
      console.error("Error consultando DNI:", error);
      res.status(500).json({ error: "Error en la consulta del DNI" });
    }
  } else {
    res.status(400).json({ error: "El número debe tener 8 dígitos (DNI) o 11 dígitos (RUC)" });
  }
});
 */
// ✅ Endpoint de información del servicio
/* app.get("/api/info", (req, res) => {
  res.json({
    servicio: "API de Consulta RUC y DNI",
    endpoints: {
      consultarRUC: "GET /api/ruc/:ruc",
      consultarDNI: "GET /api/dni/:dni",
      consultarAutomatico: "GET /api/consultar/:numero",
      informacion: "GET /api/info"
    },
    ejemplos: {
      ruc: "http://localhost:3000/api/ruc/20100066603",
      dni: "http://localhost:3000/api/dni/08879918",
      automatico: "http://localhost:3000/api/consultar/20100066603"
    }
  });
});
 */
// ✅ Escuchar en todas las interfaces para acceso desde red LAN
// app.listen(3000, '0.0.0.0', () => {
//   console.log("==========================================");
//   console.log("🚀 Servidor de Consultas RUC/DNI corriendo");
//   console.log("📍 URL local: http://localhost:3000");
//   console.log("📍 URL red LAN: http://[TU-IP]:3000");
//   console.log("==========================================");
//   console.log("Endpoints disponibles:");
//   console.log("• RUC: GET /api/ruc/20100066603");
//   console.log("• DNI: GET /api/dni/08879918");
//   console.log("• Auto: GET /api/consultar/20100066603");
//   console.log("• Info: GET /api/info");
//   console.log("==========================================");
// });


/* import express from "express";
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
// ejemplo de consulta; http://localhost:3000/api/ruc/20100066603

 */