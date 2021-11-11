import { toUpperCase } from './service2';
jest.mock("./service2");

describe('primeira func do exercicio 4', () => {
  // service2.firstLetter = jest.fn().mockImplementation((word) => {
  //   const splitWord = word.split('');
  //   return splitWord[splitWord.length-1];
  // });
  // service.concatStrings = jest.fn().mockImplementationOnce((a, b, c) => a + b + c);

  test('Deve retornar caixa baixa', ()  => {
  
    toUpperCase.mockImplementation(word => word.toLowerCase())
    expect(toUpperCase('CASA')).toBe('casa');
    expect(toUpperCase).toHaveBeenCalled();
    expect(toUpperCase).toHaveBeenCalledWith('CASA');

    toUpperCase.mockRestore();

    expect(toUpperCase("casa")).toBe("CASA");

  });

})