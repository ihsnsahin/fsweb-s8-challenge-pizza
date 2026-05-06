import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';

import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Order from './components/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import Success from './components/Success';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/order">
          <Order/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        
      </Switch>
    </>
  )
}

export default App
