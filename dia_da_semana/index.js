const express = require('express');
const app = express();

let materias = [
    {nome: 'Matemática'},
    {nome: 'Física'},
    {nome: 'Química'},
    {nome: 'Poruguês'},
    {nome: 'Geografia'}
];

let data = new Date();
let dia_semana = data.getDay();

let aula;

if(dia_semana > 0 && dia_semana < 6)

{
    aula = materias[dia_semana - 1];
}
else
{
    aula = "Hoje não tem aula";
}

app.get('/', (req, res) => {
    res.json({aula: aula});
    /* prestar atenção porque na resposta Devmedia errou somente por ter colocado o ponto e virgula no final, que já tinha lá.*/
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});

/*O codigo acima está correto para responder a questão da DevMedia. Eu tinha usado <=5 e o certo é < 6*/