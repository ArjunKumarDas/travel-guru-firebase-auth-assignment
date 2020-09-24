import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import StayInfo from './components/StayInfo/StayInfo';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
            <PrivateRoute path="/stayinfo"> 
                <StayInfo></StayInfo>
            </PrivateRoute>
         </Switch>
      </Router>
      </UserContext.Provider>
    
  );
}

export default App;
