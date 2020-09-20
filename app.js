const express = require("express");
const app = express();

// CONEXION A BASE DE DATOS
const mongoose = require("mongoose");

const user = "admin123";
const password = "admin123";
const dbname = "veterinario"
const uri = `mongodb+srv://${user}:${password}@cluster0.grrlo.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Base de datos conectada"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

// MOTOR DE PLANTILLAS
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

// RUTAS WEB
app.use("/", require("./router/routersWeb"));
app.use("/mascotas", require("./router/pets"));

app.use((req, res, next) => {
  res.status(404).render("404", {
    title: "404",
    description: "titulo del sitio web",
  });
});

app.listen(port, () => {
  console.log(`Servidor a su servicio en http://localhost:${port}`);
});
