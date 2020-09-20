const http = require('http');

const server = http.createServer((req, res) => {
    res.end('estoy respondiendo a tu solicitud')
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Escuchando solicitud en el puerto http://localhost:${PORT}`);
});