// Importa el módulo Express
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

// Obtén la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const puerto = process.env.PORT;

// Configura Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Define una ruta básica
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "./HTML/index.html"));
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
