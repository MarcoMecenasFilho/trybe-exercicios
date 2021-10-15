import React, { Component } from 'react'
import './App.css';
import EstadoFavorito from './EstadoFav';
import Select from './Select';


class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  
    this.state = {
      estadoFavorito: '',
      valueSelect: '',
      name: '',
      email: '',
      idade: 'idade',
      vaiComparecer: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className='div-form'>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />
          <input
            type="number"
            name="idade"
            value={this.state.idade} onChange={this.handleChange}
            placeholder='Idade'
          />
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={this.state.email} onChange={this.handleChange}    
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.vaiComparecer} onChange={this.handleChange}
          />
          <Select value={this.state.valueSelect} handleChange={this.handleChange}/>
    
        </form>
      </div>
    );
  }
}

export default Form;