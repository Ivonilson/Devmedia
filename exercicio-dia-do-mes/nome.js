const express = require('express');
const app = express();

let nome = {nome: 'Carlos'};

app.get('/', (req, res) =>
 {
    res.json(nome);
});

app.listen(8080, () => {
    console.log('Servidor ligado');
});