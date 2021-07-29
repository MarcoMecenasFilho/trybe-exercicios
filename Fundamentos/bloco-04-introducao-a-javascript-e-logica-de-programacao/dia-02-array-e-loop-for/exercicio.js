// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let num=0;num<numbers.length;num+=1)
console.log(numbers[num]);

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado=0
for (let num=0;num<numbers.length;num+=1)
resultado+=numbers[num]
 console.log(resultado);

//  Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//  A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0
for (let num=0;num<numbers.length;num+=1)
soma+=numbers[num]

let media=soma/numbers.length;

 console.log(media);

//  Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
//  imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0
for (let num=0;num<numbers.length;num+=1)
soma+=numbers[num]

let media=soma/numbers.length;

 if(media>20) {
   console.log("Valor maior que 20");
 }else {
   console.log("Valor menor que 20")
 }

//  Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiornumero = numbers[0]

for (index=1;index<numbers.length;index+=1){
  if (numbers[index] > maiornumero) {
    maiornumero = numbers[index]
  }
}

console.log(maiornumero);

// Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menornumero = numbers[0]

for (index=1;index<numbers.length;index+=1){
  if (numbers[index] < menornumero) {
    menornumero = numbers[index]
  }
}

console.log(menornumero);
// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado.
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
};