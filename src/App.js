
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
          <Route path="/" exact component={Dashboard}{...props}></Route>
          <Route path="/header" component={Header}{...props}></Route>
          <Route path="/login"  component={Login}{...props}></Route>
          <Route path="/signup"  component={Signup}{...props}></Route>
        <Route path="/cart" component={Cart}{...props}></Route>
          

        </Switch>
  
    </Routing >
  );
};

export default App;