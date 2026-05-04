import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Order from './components/Order';

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

      </Switch>
    </>
  )
}

export default App
