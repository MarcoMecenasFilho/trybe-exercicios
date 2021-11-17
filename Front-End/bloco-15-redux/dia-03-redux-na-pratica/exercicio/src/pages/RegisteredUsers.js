import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addUser } from '../store/actions';

export class RegisteredUsers extends Component {
  

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      age: '',
    }
  }

  handleChange = ({ target }) => {
    const {name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  register = () => {
    const { name, age, email } = this.state;
    this.props.addUser({name, email, age});
    this.setState({
      name: '',
      email: '',
      age: '',
    })
  };

  render() {
    // const { userLogin } = this.props;
    // if(!userLogin.value.email) { 
    //   return <div>Login Não Efetuado!!</div>
    // }
    return (
      <div>
        <form>
        <input 
            type='email' 
            placeholder='Email' 
            name='email'
            onChange={this.handleChange}
            />
          <input
            type='password'
            placeholder='Senha'
            name='password'
            onChange={this.handleChange}
            />
            <input
            type='number'
            placeholder='Age'
            name='age'
            onChange={this.handleChange}
            />
            <button onClick={() => this.register}>Registrar Cliente</button>
        </form>
      <Link to='/client'>Lista de clientes cadastrados</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer});

const mapDispatchToProps = dispatch => ({
  addUser: event => dispatch(addUser(event))
}) ;

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredUsers);
