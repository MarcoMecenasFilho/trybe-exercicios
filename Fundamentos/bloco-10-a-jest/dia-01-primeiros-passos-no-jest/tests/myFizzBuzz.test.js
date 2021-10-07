// 1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o      retorno é o esperado
// 2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// 3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// 4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// 5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
const myFizzBuzz = require('../src/myFizzBuzz');

describe('função myFizzBuzz()', () => {
  it('Se o valor for 15 retorna fizz buzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('se o valor for 3, retornar fizz', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });

  it('se o valor for 5, retornar buzz', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });

  it('se o valor for 2, retornar 2', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  });

  it('se o valor for uma string, retornar false', () => {
    expect(myFizzBuzz('2')).toEqual(false);
  });

});