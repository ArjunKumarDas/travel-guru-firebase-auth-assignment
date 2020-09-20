import React from 'react';

import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import StayInfo from './components/StayInfo/StayInfo';



function App() {
  return (
    <div>
      <Router>
        <Header></Header>
         <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/booking">
                <Booking></Booking>
            </Route>
            <Route path="/login">
               <Login></Login>
            </Route>
            <Route path="/stayinfo">
                <StayInfo></StayInfo>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
         </Switch>
      </Router>
      
    </div>
  );
}

export default App;
