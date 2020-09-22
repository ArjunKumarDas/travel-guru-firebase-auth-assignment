import React, { createContext, useState } from 'react';

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

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        {/* <p>name{loggedInUser.name}</p> */}
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
      </UserContext.Provider>
    
  );
}

export default App;
