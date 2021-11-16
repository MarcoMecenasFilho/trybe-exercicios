import './App.css';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredUsers from './pages/RegisteredUsers';
import Client from './pages/Client';

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="/login" render={ () => <Login /> } />
        <Route path="/register" render={ () => <RegisteredUsers /> } />
        <Route path="/client" render={ () => <Client /> } />
      </Switch>
    </div>
  );
}

export default App;
