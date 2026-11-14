const express = require("express");
const swaggerUi = require("swagger-ui-express");
const openapi = require("./Docs/openapi.js");
const app = express();
const PORT = process.env.PORT || 3000;
app.use("/api-Docs", swaggerUi.serve, swaggerUi.setup(openapi));

app.get("/api/saludo", (req, res) => {

res.json({ mensaje: "Hola desde mi API" });
});

app.get("/api/yo", (req, res) => {
res.json([
  { nombre: "Jose Gonzales", carrera: "Ingeniería de Software" },
]);
});
app.get("/api/edad/:anio", (req, res) => {


const anioActual = new Date().getFullYear();
const anio = parseInt(req.params.anio);

if (!Number.isInteger(anio) || anio < 1900 || anio > anioActual) {
  return res.status(400).json({ error: "Año invalido" });

}

res.json({ anioNacimiento: anio, edad: anioActual - anio });
});
app.listen(PORT, () => console.log("API lista"));