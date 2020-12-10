import React, { useState } from 'react';

import {
  Layout,
} from 'antd';


import './App.css';

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SignIn from './pages/Login/SignIn';


import Home from './pages/Home';





const { Content } = Layout;

function App() {

  
  const [isAuthen, setisAuthen] = useState(localStorage.getItem('token')== null ? false : true);
  
  return (
    <>
    {!isAuthen ?  <Redirect to="/login" /> : <Home />}
    <Route path='/login' component={SignIn} ></Route>
    </>
  );
}



export default App;
