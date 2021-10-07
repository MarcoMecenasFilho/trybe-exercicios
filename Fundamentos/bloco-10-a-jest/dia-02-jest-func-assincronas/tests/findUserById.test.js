// Utilizando a sintaxe de Promise , faça um teste que verifique 
// o resultado da função getUserName para o caso em que o usuário 
// é encontrado, e também um teste para o caso em que o usuário não
// é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados,
// disponíveis na variável users , para saber quais IDs existem.

const {findUserById, getUserName, users} = require('../src/findUserById');


describe('getUserName - promise', () => {
  it('When the user exists', () => {
    getUserName(1).then((data) => expect(data).toEqual('Mark'))
  });
  it('when the user does not exists', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => 
      expect(error.message).toMatch('User with 3 not found.'))
  });
});

// Reescreva o teste do exercício anterior, desta vez utilizando 
// a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

describe('getUserName - async/await', () => {
  it('when the user id exist', async () => {
    const data = await getUserName(1);
    expect(data).toEqual('Mark');
  });
  it('when the user id does not exist', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error.message).toEqual('User with 3 not found.')
    }
  })
})