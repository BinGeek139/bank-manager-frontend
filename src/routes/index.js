import React from 'react';

import Home from '../pages/Home';
import Account from '../pages/Account';
import Role from '../pages/Role';
import Menu from '../pages/Menu';
import ShowPersonels from '../pages/Personnel/ShowPersonels';
import SignIn from '../pages/Login/SignIn';


const routes = [
  {
    path: "/home",
    exact: true,
    main: () => {
      return <Home />;
    }},

  {
    path: "/personnels",
    exact: true,
    main: () => {
      return <ShowPersonels />;
    
  }},
  {
    path: "/login",
    exact: true,
    main: () => {
      return <SignIn/>;
    
  }},
]

export default routes;