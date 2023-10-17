programa
{
	
	funcao inicio()
	{
		real numero1
		real numero2
		caracter operador
		real resultado = 0.0
		
		escreva("Entre com o primeiro número: ")
		leia(numero1)

		escreva("Escolha a operação desejada digitando o símbolo da operação: \n")
		escreva("Adição: +\nSubtração: -\nMultiplicação: *\nDivisão: /\n")
		leia(operador)
		
		escreva("Entre com o segundo número: ")
		leia(numero2)
		
		se(operador == '+')
		{
			resultado = numero1 + numero2
		}
		se(operador == '-')
		{
			resultado = numero1 - numero2
		}
		se(operador == '*')
		{
			resultado = numero1 * numero2
		}
		se(operador == '/')
		{
			resultado = numero1 / numero2
		}

		escreva(numero1 +" "+operador+" "+numero2+" é igual a: "+resultado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 400; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */