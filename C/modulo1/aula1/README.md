# Introdução ao curso de C

* Objetivo do curso
	1. Aprender a programar C ANSI
* Público alvo
	1. Programadores e desenvolvedores de software
	2. Professores e estudantes de programação
	3. Demais interessados na área
* Requisitos necessários
	1. Conhecimentos básicos de lógica de programação
* Aptidões após o curso
	1. Criar programas me C
	2. Atuar no mercado de trabalho da linguagem C


# O que é o C eo C++?

O C é uma linguagem de programação muito conhecida e muito utilizada, que já esta no mercado a muito tempo. 
Foi criada por Dennis Ritchie (meados de 1970), derivando de uma linguagem mais antiga chamada BCPL. 
Ainda se encontrase em uso em algumas empresas, a algumas teorias que dizem que a linguagem C tem este nome justamente porque a linguagem BCPL
era apelidada somente de B e quando originou uma nova linguagem apelidaram ela de C devido a ordem alfabética.

Originalmente a linguagem C era muito utilizada em compiladores Unix mais acabou ganhando seu espaço em outras plataformas. 
Com isso cada plataforma começou a implementar novas funcionalidades na limguagem, e infelizmente isso começo a trazer falta de 
compatibilidade entre as plataformas, nos códigos em C. Pois algumas funcionalidades em uma plataforma não funcionava em outras. Para resolver 
este problema um instituto de padrões americano, também conhecido como ANSI, criou em 1983 um padrão, de funcionalidades na limguagem C que 
deverião funcionar em todas as plataformas. Portanto, podemos dizer que programas criados em C que sigam as normas ANSI, eles poderão ser 
usados em outras plataformas, esta caracteristica chamamos de portabilidade.

Neste curso será usado o C ANSI, o que é bem apreciado pelo mercado.

O C++ foi inicialmente criado por Bjarne Stroustrup em 1983, diferente do C com ele pode ser utilizado classes.


# Como funciona?

Uma recomendação logo aqui, é usarmos arquivos com a extenção ".c", e outra recomendação é não usarmos programas processadores de texto como 
o Word.

Outra etapa para fazermos o nosso código é a de compilação, e cada plataforma vai ter sua forma de compilar o código. Na pratica significa que 
o código de máquina feito no windows, vai ser diferente do código gerado no Unix. Para cada uma destas plataformas vai ter que ser compilado o
código em separado

O outro processo é o de Linkeditar, onde outros programas gerados em outras blibiotecas, podem ser unificados com a geração de um novo programa
final, e portanto ser distribuido.

# Arquitetura de memória

A limguagem C organiza os dados em 4 regiões de memória quando um programa em C é executado.

1. Código Objeto (Código do Programa) - É onde sera armazenado o seu programa. O processador sempre ira acessar esta parte quando ele precisar
ler as instruções para o proximo passo a ser executado.

2. Variaveis Globais - É onde as variaveis globais serão armazenadas.

3. Pilha (ordem das chamadas e retornos) - É onde as instruções de chamadas e retornos são chamadas, isso significa que a ordem das mesmas é 
no formato de "pilha" a primeira que entra é a primeira a sair, isso organiza as chamadas e retornos, para que o processo saiba onde retornar
após executar determinada bloco de instruções.

4. Heap (memória livre) - Um local destinado para alocação dinamica, de memórias

Essas 4 regiões representão a arquitetura de memória utilizada por uma aplicação escrita em C.


Em sistemas Unix e Linux será usado o GCC, já em sistemas windows recomenda-se usar o Visual Studio.
Para compilar em Linux e Unix vejá o arquivo helloworld.c