// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio.
//     Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo
//     como parâmetros o número apostado e uma função que checa se o
//     número apostado é igual ao número sorteado. O retorno da sua
//     HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// const numberRandom = () => {
  
//   return Math.floor((Math.random() * 5) + 1);
// } 

// console.log(numberRandom())

// const sorteio = (number) => {
//   let numberChoice = 3;
//   console.log(numberChoice)
  
//   if(numberChoice == number) {
//     return 'Parabéns você ganhou';
//   } else {
//     return 'Tente Novamente';
//   };

// }

// console.log(sorteio(numberRandom));

// 

const check = (Mynumber, number) => Mynumber === number;


const sorteio = (Mynumber, callback) => { 
const number =  Math.floor((Math.random() * 5) + 1);
   
   if(callback(Mynumber, number ) === true) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente Novamente';
  };

}

console.log(sorteio(3, check));




