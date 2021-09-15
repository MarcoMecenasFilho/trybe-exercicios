const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

// 1 - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
// 2 - Implementamos a função monthlyBudget que recebe três parâmetros, nossos gastos, nossa renda e a função callback .
// 3 - Realizamos a implementação da função callback representada por handleExpenses que recebe nossos gastos mensais e retorna um valor de gastos total.
// 4 - Adicionamos handleExpenses na chamada da função monthlyBudget e como resultado temos o balanço mensal.

const monthlyBudget = (myIncome, myExpenses, callback) => {
  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

const handleExpenses = (myExpenses) => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);

// Balanço do mês:
//     Recebido: R$1000,00
//     Gasto: R$459,00
//     Saldo: R$541,00