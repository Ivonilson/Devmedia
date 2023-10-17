const express = require('express');
const app = express();

let ingressos_disponiveis = 10;
let ingressos_compra = 3;

let resultado;

if(ingressos_disponiveis >= ingressos_compra)
{ 
	resultado = {comprou: ingressos_compra};
}
else
{
	resultado = {mensagem: 'Ingressos insuficientes'};
}

app.get('/', (req, res) =>
 {
    res.json(resultado);
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});