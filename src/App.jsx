import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';

import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Order from './components/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import Success from './components/Success';
import Error from './components/Error';

function App() {
  const [orderInfo, setOrderInfo] = useState(null);
  const history = useHistory();
  const handleFinalOrder  = (data) =>{
    setOrderInfo(data);
    history.push("/success", data) 
  }
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/order/:id">
          <Order handleFinalOrder={handleFinalOrder}/>
        </Route>
        <Route path="/success">
          <Success orderInfo={orderInfo}/>
        </Route>
        <Route path="/error">
          <Error/>
        </Route>
      </Switch>
    </>
  )
}

export default App
