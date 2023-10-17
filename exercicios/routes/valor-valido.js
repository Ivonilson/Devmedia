const express = require('express');
//const app = express();
routerValido = express.Router();

let celular = '(21)99999-9999';
let valido = celular.length == 14 ? true : false; 

routerValido.get('/', (req, res) => {
    //res.json({telefone: valido, title: 'Status Telefone'});
    res.render('valor-valido', {telefone: valido, title: 'Status Telefone'})
});

/*routerValido.listen(8080 , () => {
    console.log('Servidor iniciado');
});*/

module.exports = routerValido;