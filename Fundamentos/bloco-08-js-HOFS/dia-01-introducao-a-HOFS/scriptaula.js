// 1 - Crie uma função que retorne a string 'Acordando!!' ;
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta 
//     função para que imprima no console o resultado da execução das 
//     funções que você criou nos exemplos anteriores


const wakeUp = () => 'Acordado!!!';
const drinkCoffe = () => 'Bora tomar café!!!';
const  goSleep = () => 'Partiu dormir!!!';



// Ao chamar a função doingThings:
const doingThings = (callback) => {
  const result = callback();
    console.log(result);
}

doingThings(wakeUp);
doingThings(drinkCoffe);
doingThings(goSleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!