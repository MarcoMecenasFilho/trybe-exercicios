// 1-Faça as modificações necessárias na função para que o seu 
// comportamento respeite o escopo no qual cada variável foi 
// declarada:
//  - Modifique a estrutura da função para que ela seja uma arrow
// function .
//  - Modifique as concatenações para template literals .

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope =`${ifScope}  ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// 2-Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , 
// é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler:
//  É possível resolver com uma linha usando ternary operator .

const FactorialNumber = (Number) => {
  let resultado = 1
  for (i = 2; i <= Number; i += 1) {
   resultado *= i;
  }
  return resultado;
}

console.log(FactorialNumber(6));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(6));






function teste(a) {
 const par = a % 2 === 0 ? console.log('É par sim tio') : console.log('Né par não fio');
 return par;
}

teste(4725);


function primos(number){
  const  primo = number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 ? console.log('É primo sim tio') : console.log('É primo não fio');
  return  primo;
}
  
primos(7823);