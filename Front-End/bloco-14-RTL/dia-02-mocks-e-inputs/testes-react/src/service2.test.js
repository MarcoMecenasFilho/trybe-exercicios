const service2 = require('./service2');
jest.mock("./service2");

describe('primeira func do exercicio 4', () => {
  // service2.firstLetter = jest.fn().mockImplementation((word) => {
  //   const splitWord = word.split('');
  //   return splitWord[splitWord.length-1];
  // });
  // service.concatStrings = jest.fn().mockImplementationOnce((a, b, c) => a + b + c);

  test('Deve retornar caixa baixa', ()  => {
    service2.toUpperCase.mockImplementation(word => word.toLowerCase());
    expect(service2.toUpperCase('CASA')).toBe('casa');
    expect(service2.toUpperCase).toHaveBeenCalled();
    expect(service2.toUpperCase).toHaveBeenCalledWith('CASA');

    service2.toUpperCase.mockRestore();
    
    expect(service2.toUpperCase("casa")).toBe("CASA");

  });

})