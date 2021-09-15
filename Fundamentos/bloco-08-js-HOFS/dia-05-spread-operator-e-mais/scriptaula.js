// Para fixar e praticar, vamos fazer uma salada de frutas com
// itens adicionais que você desejar. Faça uma função chamada
// fruitSalad passando como parâmetro specialFruit e additionalItens
// , faça a função retornar uma lista única contendo todos os itens
// da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'abacaxi', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'iogurte', 'aveia'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));


// rest...

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 303, -202, 23)); // 88

//  array destructuring ..

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

 saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [lo, pessoa] = saudacoes;

console.log(pessoa(lo));

// ;;;;2

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';


[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

// ....
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
 [,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo



// Do jeito que está, quando passamos person para a função GetNationality
// o retorno é João is undefined . Ajuste a função GetNationality para que
// a chamada GetNationality(person) retorne João is Brazilian .

const getNationality = ({ firstName, nationality = 'Brasilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};



const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));


// properity shorthand

const getPosition = (latitude, longitude) => {
  return {
  latitude,
  longitude,
  }
};

console.log(getPosition(-19.8157, -43.9542));

// default paramter
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!


// escreva uma função multiply que multiplique dois
// números passados como argumentos.
// Atribua como default o valor 1 caso não seja passado 
// nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => number * value;

console.log(multiply(8));