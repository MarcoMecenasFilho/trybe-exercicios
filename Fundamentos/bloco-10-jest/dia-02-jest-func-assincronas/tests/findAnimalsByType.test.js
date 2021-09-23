const {findAnimalsByType, Animals} = require('../src/findAnimalsByType');

describe('Qual o tipo de animal existe', () => {
  test('Rerone a lista de animais', () => ( // mudamos as chaves para parenteses.
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    })
  ))
})

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(1);
    return findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')

    ));
  });
});