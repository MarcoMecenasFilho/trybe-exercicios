import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginData } from '../store/actions'

export class Login extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = ({ target }) => {
    const {name, value } = target;
    this.setState({
      [name]: value,
    })
  }
  render() {
    const {email, password } = this.state;
    const { loginData } = this.props;
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
          <Link to="/register">
            <button 
              type='button'
              onClick={() => loginData({email, password})}
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginData: (event) => dispatch(loginData(event))
});

export default connect(null, mapDispatchToProps)(Login);
