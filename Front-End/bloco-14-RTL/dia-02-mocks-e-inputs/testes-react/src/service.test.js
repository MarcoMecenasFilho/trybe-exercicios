const service = require('./service');

describe("Numeros aleatórios", () => {
  test("#randomNumber", () => {

    service.randomNumber = jest.fn().mockReturnValue(10);

    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
  });

  test('segunda implementação', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a/b);
    expect(service.randomNumber(4, 2)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  test('terceira implementação', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a*b*c);
    expect(service.randomNumber(4, 2, 1)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
});
