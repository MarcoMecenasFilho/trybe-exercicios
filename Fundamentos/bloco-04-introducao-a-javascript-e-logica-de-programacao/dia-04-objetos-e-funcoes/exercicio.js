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

// texte
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