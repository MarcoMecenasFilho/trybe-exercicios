// 2 - Utilize o find para retornar o primeiro 
//     número do array que é divisível por 3 e 5 , caso ele exista:


//  com Arrow Function
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return number}
  });
  // Adiciona seu código aqui
console.log(findDivisibleBy3And5)


// com callBack
const numbers = [19, 21, 30, 3, 45, 22, 15];

const callback = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return number
  }
}

const findDivisibleBy3And5 = numbers.find(callback);
  // Adiciona seu código aqui
console.log(findDivisibleBy3And5);

