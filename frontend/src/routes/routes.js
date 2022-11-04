import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Dash, Login } from '../pages';

function RouteNav() {
  return (
      <Routes>
        <Route path="/" component={Login} />
        <Route path="board" component={Dash} />
      </Routes>
  )
}

export default RouteNav
