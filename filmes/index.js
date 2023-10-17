const express = 
require('express');
const app = express();

let filmes
 = [
    {nome: 'Vingadores'},
    {nome: 'Liga da Justiça'},
    {nome: 'Capitão América: Guerra Civil'},
    {nome: 'Harry Potter e o enigma do príncipe'},
    {nome: 'Your Name.'},
    {nome: 'Naruto: Road to Boruto'},
    {nome: 'Thor: Ragnarok'}
];

let data = new Date();
let dia_semana = data.getDay();

let filme = {sugestao: filmes[dia_semana]};

app.get('/', (req, res) => {
    res.json(filme);
});

app.listen
(8080 , () => {
    console.log('Servidor iniciado');
});

/*Tentar esse acima, porque o anterior que aparentemente não tinha erro não passou...*/