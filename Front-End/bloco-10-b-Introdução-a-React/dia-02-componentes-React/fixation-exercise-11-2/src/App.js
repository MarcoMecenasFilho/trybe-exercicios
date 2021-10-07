// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const product = [ {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
      },
      {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
        },
      },
        {
          id: 745,
          user: "julinho@gmail.com",
          product: "Splinter Blue",
          price: {
            value: 0.00,
            currency: "Real"
            },
          }
        
      
        
    ];

    return (
      product.map((products, index) => (
      <div key={index} className="App">
        <h1> Orders recently created </h1>
        <Order users={products.user} product={products.product} price={products.price} />
        
      </div>
    )));
  }
}

export default App;