import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';

import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Order from './components/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import Success from './components/Success';

function App() {
  const [orderInfo, setOrderInfo] = useState(null);
  const history = useHistory();
  const handleFinalOrder  = (data) =>{
    setOrderInfo(data);
    history.push("/success", data) 
  }
  const [modal, setModal] = useState(false);
  const modalToggle = () => setModal(!modal);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/order/:id">
          <Order handleFinalOrder={handleFinalOrder} modal={modal} modalToggle={modalToggle}/>
        </Route>
        <Route path="/success">
          <Success orderInfo={orderInfo}/>
        </Route>
      </Switch>
    </>
  )
}

export default App
