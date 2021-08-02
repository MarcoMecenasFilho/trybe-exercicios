// Para fixar
// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
// 2 - Acesse as chaves name , lastName e age e concatene as suas 
// informações para imprimir no console uma mensagem no seguinte formato: 
// "A jogadora Marta Silva tem 34 anos de idade".
// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo 
// as datas em que a jogadora Marta foi considerada a melhor do mundo.
// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: 
// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
// 5 - Acesse a chave medals e faça um console.log no seguinte formato: 
// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
let player={
  name:'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018]
  
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + ' ' + player.age + ' anos de idade.')
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor jogadora do mundo 6 vezes  ' + player.bestInTheWorld )
console.log('A jogadora possui '+player.medals.golden +' medalhas de outro e '+ player.medals.silver + ' medalhas de prata.')

// Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorges' 
};

for(let key in names) {
  console.log('Olá ' + names[key]+'!')
}

// 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let key in car) {
  console.log(key, car[key])
}

// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. 
// As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. Por exemplo:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
function sum(a, b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
function mult(a, b) {
  return a*b;
}
function div(a,b) {
  return a/b;
}
function mod(a,b) {
  return a%b;
}
sum(8,2)

console.log(sum(1, 7), sub(2, 4), mult(3, 9), div(12, 3), mod(10, 5));

// teste
function canDrive(age){
  if (age >= 18 ){
    return 'Pode guiar irmão';
  }else if (age>= 15){
    return 'Pode não irmão'
  }else{
    return 'Cade seu responsavel criança?'
  }
}

console.log(canDrive(16));

// Exercício aula:
// Imprima no console uma mensagem de boas-vindas para a personagem 
// incluindo seu nome.
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem vinda, ' + info['personagem'])

// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o 
// valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console

info['recorrente'] = 'sim'
console.log(info)
// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for(let key in info) {
  console.log(key);
}
// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for(let key in info) {
  console.log(info[key]);
}

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os 
// seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 
// 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada 
// uma das chaves.
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',

};

info['recorrente'] = 'sim'

let info2= {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, dell’s Four Color COmics #178',
  nota: ' o último MacPatinhas',
  recorrente: 'sim',
};

for ( let properties in info) {
  if (properties==='recorrente' &&
  info[properties]==='sim' &&
  info2[properties]==='sim' 
  ){
    console.log("Ambos recorrentes");
  }else{
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}

//  Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(word) {
  let reverse = word.split('').reverse().join('');
  if (reverse === word) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('arara')); 
console.log(verificaPalindrome('desenvolvimento'));


// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); 