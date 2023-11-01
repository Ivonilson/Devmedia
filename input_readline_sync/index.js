//import entradaDados from 'readline-sync';
//import caixaTexto from 'readline-sync';

/**Testando o input */
//let nome = entradaDados.question('Digite seu nome:');
//console.log('Olá '+ nome);

/**Testando o input e convertendo string para number e testando em um cálculo de soma */
//let a = entradaDados.question('Informe o primeiro numero:');
//let b = entradaDados.question('Informe o segundo numero:');

//let soma = Number(a) + Number(b);
//console.log('O resultado da soma é: ' + soma);

/*let pessoa = [
    { nome: "Gabriel", idade: 27 },
    { nome: "Julia", idade: 22 },
    { nome: "Marcela", idade: 24 }
];

let indice = entradaDados.question("Digite o índice do objeto desejado: ");

console.log("Nome: " + pessoa[indice].nome);
console.log("Idade: " + pessoa[indice].idade);*/

/*let x = caixaTexto.question('Informe o valor de x: ');
let y = caixaTexto.question('Informe o valor de y: ');
let resultado = Number(x) + Number(y);
console.log(resultado);
*/

/*
import campoTexto from 'readline-sync';
let nome = campoTexto.question('informe seu nome');
console.log("Nome: "+nome);
*/

/*
import inputRL from 'readline-sync';

let nome =  inputRL.question("Digite o nome do aluno: ")
let idade = inputRL.question("Digite a idade do aluno: ")
let email = inputRL.question("Digite o email do aluno: ")

let aluno = {
    nome: nome,
    idade: idade,
    email: email
};

console.log("Nome: "+aluno.nome)
console.log("Idade: "+aluno.idade)
console.log("Email: "+aluno.email)
*/

/*
import entrada from 'readline-sync';

let n1 = entrada.question('Informe o nota 1: ');
let n2 = entrada.question('Informe o nota 2: ');
let n3 = entrada.question('Informe o nota 3: ');
let n4  = entrada.question('Informe o nota 4: ');

let media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;
console.log(media);

*/

/*
import rlsync from 'readline-sync';

let c = rlsync.question('Informe a temperatura em celsius: ');

let f = (c * 1.8) + 32;

console.log(f+"ºF");
*/

/*
import entradaDados from 'readline-sync';

let nome = entradaDados.question("Digite o nome do soldado: ");
let idade = entradaDados.question("Digite a idade do soldado: ");
let email = entradaDados.question("Digite o email do soldado: ");

let soldado = {
    nome: nome,
    idade: idade,
    email: email
};

console.log("Nome: "+soldado.nome);
console.log("Idade: "+soldado.idade);
console.log("Email: "+soldado.email);

*/

/*
let aluno = {
    nome: 'Gustavo',
    matricula: 343
};

console.log("Nome do aluno: "+aluno.nome);
console.log("Matrícula do aluno: "+aluno.matricula);
*/

/*
let indice_musica = 4;

let playlist = [
    {artista: 'Scandal', musica: 'Sisters'},
    {artista: 'Silent Siren', musica: 'Alarm'},
    {artista: 'The Peggies', musica: 'Love trip'},
    {artista: 'LiSA', musica: 'Rally go Round'}
]

console.log("Artista:"+playlist[indice_musica].artista);
console.log("Música:"+playlist[indice_musica].musica);
*/

/*
import rlsync from 'readline-sync';

let massa = rlsync.question('Informe a massa: ');
let aceleracao = rlsync.question('Informe a aceleração: ');

let forca = massa * aceleracao;
console.log(forca+" N");
*/

/*
import readline from 'readline-sync';

let diametro = readline.question('Informe o diâmetro: ');

let raio = diametro / 2;

console.log(raio);
*/

/*
import readlineSync from 'readline-sync';

let a = readlineSync.question("Informe o valor de a: ");
let b = readlineSync.question("Informe o valor de b: ");

let soma = Number(a) + Number(b);

console.log("\nResultado: "+soma);
*/

/*
import rlsync from 'readline-sync';

let a = rlsync.question('Informe o valor de a: ');
let b = rlsync.question('Informe o valor de b: ');
let c = rlsync.question('Informe o valor de c: ');

let resultado = Number(a) + Number(b) + Number(c);

console.log(resultado);
*/

/*
import input from 'readline-sync';

let nome = input.question("Informe o nome do artista: ");
let musica = input.question("Informe a musica: ");

let artista = {
    nome: nome,
    musica: musica
}

console.log("Artista:"+artista.nome);
console.log("Música:"+artista.musica);
*/

import entradaDados from 'readline-sync';

let produtos = [
    {nome: 'Ventilador', preco: 129},
    {nome: 'Geladeira', preco: 1299},
    {nome: 'Batedeira', preco: 249}
];

let indice = entradaDados.question("Digite o índice do objeto desejado: ")

console.log("Nome: "+produtos[indice].nome)
console.log("Preço: "+produtos[indice].preco)
