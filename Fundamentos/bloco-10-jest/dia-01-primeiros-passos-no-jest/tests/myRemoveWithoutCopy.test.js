// 1 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3)
//     retorna o array esperado
// 2 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3)
//     não retorna o array [1, 2, 3, 4]
// 3 - Faça uma chamada para a função myRemoveWithoutCopy e verifique
//     se o array passado por parâmetro sofreu alterações
// 4 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) 
//     retorna o array esperado

const myRemoveWithoutCopy = require('../src/myRemoveWithoutCopy')

describe('Função myRemoveWithOut()', () => {
  it('verifica se chamar o  ([1, 2, 3, 4], 3) retorna [1, 2, 4]',
  () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3))
  });

  it('verifica se chamar o  ([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', 
    () => {
    expect(myRemoveWithoutCopy(([1, 2, 3, 4], 3) )).not.toEqual([1, 2, 3, 4])
    })

  it('verifica se  o array [1, 2, 3, 4] sofre alteração',
  () => {
  const  list = [1, 2, 3, 4];
  myRemoveWithoutCopy(list, 3);
  expect(list).not.toEqual([1, 2, 3, 4]);
  });

  it('verifica se chamar ([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]',
  () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5))
  });

});