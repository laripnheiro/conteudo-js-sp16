//Operadores de Comparação

// Operador Comparador de Igualdade
let a = 5;

let comparadorIgualdade1 = (a == 5);
let comparadorIgualdade2 = ( a == 8);
let comparadorIgualdade3 = ( a == "5");

console.log(comparadorIgualdade1);
console.log(comparadorIgualdade2);
console.log(comparadorIgualdade3);
console.log("");

//Operador Comparaador de gualdade e tipo
let comparadorIgualTipo1 = ( a === 5);
let comparadorIgualTipo2 = ( a === 8);
let comparadorIgualTipo3 = ( a === `5`);

console.log(comparadorIgualTipo1);
console.log(comparadorIgualTipo2);
console.log(comparadorIgualTipo3);
console.log("");

// Operador Comparador de Diferença

let comparadorDiferenca1 = ( a != 5);
let comparadorDiferenca2 = ( a != 8);
let comparadorDiferenca3 = ( a != '5');

console.log(comparadorDiferenca1);
console.log(comparadorDiferenca2);
console.log(comparadorDiferenca3);
console.log("");

//Operador Comparador de Diferença entre tipo e valor

let comparadorDifVal1 = (a !== 5 );
let comparadorDifVal2 = (a !== 8 );
let comparadorDifVal3 = (a !== '5' );

console.log(comparadorDifVal1);
console.log(comparadorDifVal2);
console.log(comparadorDifVal3);
console.log("");

// Operador Comparador Maior Que
let comparadorMaiorQue1 = (a > 5);
let comparadorMaiorQue2 = (a > 8);
let comparadorMaiorQue3 = (a > 3);

console.log(comparadorMaiorQue1);
console.log(comparadorMaiorQue2);
console.log(comparadorMaiorQue3);

console.log("");

// Operador Comparador Menor Que
let comparadorMenorQue1 = (a < 5);
let comparadorMenorQue2 = (a < 8);
let comparadorMenorQue3 = (a < 3);

console.log(comparadorMenorQue1);
console.log(comparadorMenorQue2);
console.log(comparadorMenorQue3);

console.log("");

// Operador Comparador Maior ou Igual Que
let comparadorMaiorIgualQue1 = (a >= 5);
let comparadorMaiorIgualQue2 = (a >= 8);
let comparadorMaiorIgualQue3 = (a >= 3);

console.log(comparadorMaiorIgualQue1);
console.log(comparadorMaiorIgualQue2);
console.log(comparadorMaiorIgualQue3);

console.log("");

// Operador Comparador Menor ou Menor Que
let comparadorMenorIgualQue1 = (a <= 5);
let comparadorMenorIgualQue2 = (a <= 8);
let comparadorMenorIgualQue3 = (a <= 3);

console.log(comparadorMenorIgualQue1);
console.log(comparadorMenorIgualQue2);
console.log(comparadorMenorIgualQue3);

console.log("");

// Operador Comparador em Estrutura Condicional
let idade = 13;
let mensagem;

if (idade < 18) {
  mensagem = "Você é menor de idade!";
  console.log(mensagem);
}