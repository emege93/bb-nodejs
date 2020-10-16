const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


require('dotenv').config();

// CONEXION A BASE DE DATOS
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.USER1}:${process.env.PASSWORD}@cluster0.grrlo.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Base de datos conectada"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

// MOTOR DE PLANTILLAS
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

// RUTAS WEB
app.use(express.static('public'));
/* app.use('/static', express.static('public')); OPCION PARA USAR UNA RUTA ESPECIFICA */
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
