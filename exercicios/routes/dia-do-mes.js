const express = require('express');
const RouterDiaMes = express.Router();

let data = new Date();

let dia_mes = data.getDate();

RouterDiaMes.get('/', (req, res) =>{
	//res.render('dia-do-mes', {dia: dia_mes, title: 'Dia do mês'});
    res.json({dia: dia_mes});
});

module.exports = RouterDiaMes;


