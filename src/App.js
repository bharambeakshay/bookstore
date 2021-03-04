
import React from 'react';
import './App.scss';
import { Router as Routing, Route, Switch } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashoard';
import Login from './Components/Login/Login'
import history from './Components/history'
import Signup from "./Components/Signup/Signup"
import Cart from "./Components/Cart/Cart"
import Header from './Components/Header/Header';


const App = (props) => {
  return (
    <Routing history={history}>
      <Switch>
        <Route path="/dashboard" exact component={Cart}></Route>
        <Route path="/header" component={Header}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        {/* <Route path="/Cart" component={Cart}></Route> */}
      </Switch>

    </Routing >
  );
};

export default App;