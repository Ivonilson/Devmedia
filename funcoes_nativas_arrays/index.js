const dias_semana = 
[
    'Domingo', 'Segunda-Feira', 'Terça-Feira',
    'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira'
]

// adiciona o elemento na última posição do array
dias_semana.push('Sábado');

//percorre o array fazendo a leitura dos elementos
dias_semana.forEach((dia) => {
    console.log(dia);
})

//console.log(dias_semana);