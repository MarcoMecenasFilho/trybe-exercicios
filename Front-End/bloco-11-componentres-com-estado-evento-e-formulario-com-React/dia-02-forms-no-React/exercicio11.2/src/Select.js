import React, { Component } from 'react'

class Select extends Component {
  render() {
    const {value, handleChange} = this.props;

    return(
      <label> Iai, Você Vai?
      <select name='valueSelect' value={value} onChange={handleChange}>
        <option></option>
        <option value='100/100'>100/100</option>
        <option value='obvio'>obvio</option>
      </select>
    </label>
    )
  }
}

export default Select;