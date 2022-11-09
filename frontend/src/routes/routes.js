import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Dash, Login, Register } from '../pages';

function RouteNav() {
  return (
      <Routes>
        <Route path="/" component={<Login/>} />
        <Route path="/board1" component={<Register/>} />
        <Route path="/board" component={<Dash/>} />
      </Routes>
  )
}

export default RouteNav
