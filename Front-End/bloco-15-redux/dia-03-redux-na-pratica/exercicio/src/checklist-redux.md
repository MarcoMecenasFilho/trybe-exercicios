# Checklist do react-redux

*Antes de começar*
- [x] pensar como será o *formato* do seu estado global
  Ele ira guardar o email, idade e  nome de cada cliente;


- [x] pensar quais actions serão necessárias na sua aplicação
  preciso de 2 action;
  uma para ler os dados dos clientes na store e outra para editar.

*Instalação*
- [x] npx create-react-app my-app-redux;
- [x] npm install --save redux react-redux;

*Criar dentro do diretório src:*
- [x] diretório `store`

**Criar dentro do diretório `store`**
- [x] arquivo `index.js`
- [x] diretório `actions`
- [x] diretório `reducers`

*Criar dentro do diretório `actions`:*
- [x] arquivo `index.js`.

*Criar dentro do diretório `reducers`:*
- [x] arquivo `index.js`.

*Criar dentro do arquivo `reducers/index.js`:*
- [] estado inicial
- [] criar função reducer com `switch` retornando apenas a opção `default`
- [] criar `rootReducer` usando o `combineReducers`
- [] exportar `rootReducer`

exemplo:

```js
const INITIAL_STATE = {};

const exampleReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   default:
    return state;
 }
}

const rootReducer = combineReducers({ exampleReducer })
```

*No arquivo store/index.js:*
- [x] importar `rootReducer` e usá-lo na criação da `store`
- [x] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)
- [x] exportar a `store`

*No arquivo App.js:*
- [x] importar a `store`
- [x] definir o Provider, `<Provider store={ store }>`, para fornecer os estados a todos os componentes encapsulados em `<App />`.

*Na pasta actions:*
- [] criar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [] criar os actions creators necessários

*Nos componentes que irão ler o estado:*
- [ ] criar a função `mapStateToProps`
- [ ] exportar usando o `connect`

*Nos componentes que irão modificar o estado:*
- [ ] criar a função `mapDispatchToProps`
- [ ] exportar usando o `connect`

```js
export default connect(mapStateToProps, mapDispatchToProps)(Component)
```