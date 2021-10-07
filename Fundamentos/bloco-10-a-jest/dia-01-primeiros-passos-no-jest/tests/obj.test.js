const {obj1, obj2, obj3} = require('../src/objEqual')

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

describe('comparar os objetos', () => {
  it('verifica de obj1 é igual a 2', () => {
    expect(obj1).toEqual(obj2);
  });
  it('compara os objetos 1 e 3', () => {
    expect(obj1).not.toEqual(obj3);
  });
  it('compara os objetos 2 e 3', () => {
    expect(obj2).not.toEqual(obj3);
  })
});