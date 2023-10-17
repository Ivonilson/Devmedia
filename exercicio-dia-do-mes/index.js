const express = 
require('express');
const application = express();

let data = new Date();

let dia_mes = {conteudo: data.getDate()};

application.get('/', (req, res) => {
    res.json(dia_mes);
});

application.listen(8080, () => {
   console.log("Servidor iniciado");
});