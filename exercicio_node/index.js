const express = require('express');
const app = express();

const sugestaoFilmes = require('./sugestaoFilmes');
const estacao = require('./estacao');
const heroiEditora = require('./heroiEditora');

app.get('/', (req, res) => {

    let filmeSugerido = sugestaoFilmes.sugereFilmeSemana();
    res.json({ filme: filmeSugerido });
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});

app.get('/estacao', (req, res) => {
    let mes = req.query.mes;
    let estacaoAno = estacao.retornaEstacaoAno(mes);
    res.json({ estacao: estacaoAno });
});

app.get('/heroiEditora', (req, res) => {
    let heroi = req.query.heroi;
    let editora = heroiEditora.retornaEditora(heroi);

    res.json({ editora: editora });
});

