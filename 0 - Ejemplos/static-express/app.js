const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static(__dirname + "/public"))

app.use((req, res, next) => {
    res.status(404).sendfile(__dirname + "/public/404.html")
})

app.get('/', (req,res) => {
    res.end('Mi respuesta desde express')
})

app.get('/servicios', (req,res) => {
    res.end('Pagina de servicios')
})

app.listen(PORT, () => {
    console.log(`Servidor a su servicio en http://localhost:${PORT}`);
})