import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {numeroDeClicks: 0, numeroDeClicks2: 0, numeroDeClicks3: 0}

    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }
  handleClick() {
    console.log(this)
    console.log('Clicou no botão 1!')
    this.setState((lastState, _props) => ({
      numeroDeClicks: lastState.numeroDeClicks + 1
    }))
  }
  handleClick2() {
    console.log('Clicou no botão2!')
    this.setState((lastState, _props) => ({
      numeroDeClicks2: lastState.numeroDeClicks2 + 1
    }))
  }
  handleClick3() {
    console.log('Clicou no botão3!')
    this.setState((lastState, _props) => ({
      numeroDeClicks3: lastState.numeroDeClicks3 + 1
  }))
}
  render() {
      return (
        <div className='dvi'>
          <button className='btn' onClick={this.handleClick}>{this.state.numeroDeClicks}</button>
          <button className='btn' onClick={this.handleClick2}>{this.state.numeroDeClicks2}</button>
          <button  className='btn'onClick={this.handleClick3}>{this.state.numeroDeClicks3}</button>
        </div>)
  }
}

export default App;