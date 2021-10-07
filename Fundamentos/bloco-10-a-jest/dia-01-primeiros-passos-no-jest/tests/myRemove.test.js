// 1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) 
//     retorna o array esperado
// 2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3)
//     não retorna o array [1, 2, 3, 4]
// 3 - Verifique se o array passado por parâmetro não sofreu 
//     alterações
// 4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna
//     o array esperado

const myRemove = require('../src/myRemove')

describe('Função myRemove()', () => {
  it('verifica se chamar o array [1, 2, 3, 4] retorna [1, 2, 4]',
  () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3))
  });

  it('verifica se chamar o array [1, 2, 3, 4] não retorna [1, 2, 3, 4]',
  () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3))
  });

  it('verifica se  o array [1, 2, 3, 4] não sofre alteração',
    () => {
    const  list = [1, 2, 3, 4];
    myRemove(list, 3)
    expect([1, 2, 3, 4]).toEqual(list);
  });

  it('verifica se chamar ([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]',
  () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5))
  });

})