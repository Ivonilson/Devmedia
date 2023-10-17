const express = require('express');
const application = express();

let cpf = {cpf: '123.456.789-00'};

application.get( '/', (req, res) =>
 {
    res.json(cpf);
});

application.listen(8080, () => {
   console.log("Servidor iniciado");
});