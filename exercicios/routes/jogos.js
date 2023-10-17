let express = require('express');
let routerJogos = express.Router();

let jogos = ['Gears 5', 'Halo Infinite', 'Perfect Dark', 'Forza Horizon'];
let jogo_escolhido = jogos[2];

let jogo_json = {jogo: jogo_escolhido};

routerJogos.get('/', (req, res, next) => {
	//res.render('jogos', {jogo: jogo_escolhido, title: 'Jogos'});
	res.json(jogo_json);
});

module.exports = routerJogos;