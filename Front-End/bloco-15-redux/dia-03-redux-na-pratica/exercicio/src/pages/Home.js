import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Olá, clique no botão e realize seu Cadastro!!</h1>
        <Link to="/login">Cadastro</Link>

      </div>
    )
  }
}
