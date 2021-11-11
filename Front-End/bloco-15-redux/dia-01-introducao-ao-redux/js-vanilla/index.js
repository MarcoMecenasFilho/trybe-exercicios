const Redux = require('redux');

//modificar um stado;
const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

//  Uma store só funciona se passarmos uma função que será responsável
//  por alterar os dados dela: o reducer . Por boa prática é fazer em um arquivo separado;
//  Inicialmente o state vem como undefined , e não queremos isto. Então iremos atribuir 
//  a ele um valor padrão.
const ESTADO_INICIAL = {
  login: false,
  email: '',
};
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
      default:
        return state;
  }
};

const store = Redux.createStore(reducer);
store.dispatch(fazerLogin("user@user.com"))

console.log(store.getState());

