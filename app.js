const express = require('express');

const app = express();
const PORT = 3000;

// MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.get('/', (req,res) => {
    res.render('index', {title: "mi titulo dinamico"})
})

app.get('/servicios', (req,res) => {
    res.render('services', {title: "mi titulo dinamico de servicios"})
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        title: "404",
        description: "titulo del sitio web"
    })
})

app.listen(PORT, () => {
    console.log(`Servidor a su servicio en http://localhost:${PORT}`);
})