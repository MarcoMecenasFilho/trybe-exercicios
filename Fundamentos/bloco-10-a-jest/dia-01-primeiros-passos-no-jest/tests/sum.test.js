// 1 - Teste se o retorno de sum(4, 5) é 9
// 2 - Teste se o retorno de sum(0, 0) é 0
// 3 - Teste se a função sum lança um erro quando os 
//     parâmetros são 4 e "5" (string 5)
// 4 - Teste se a mensagem de erro é "parameters must
//     be numbers" quando realizar a chamada sum(4, "5")

const sum = require('../src/sum');

describe('A função sum()', () => {
  it('verifica se o retorno de sum(4,5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('verifica se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('verifica se o retorno de sum(4,string 5) é lançado um erro', () => {
    expect(() => {sum(4, '5')})
    .toThrowError()
  });

  it('verifica se o retorno de sum(4,string 5) é lançado um erro com uma      mensagem', () => {
    expect(() => {sum(4, '5')})
    .toThrowError(new Error('parameters must be numbers'))
  });
});