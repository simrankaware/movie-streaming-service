import React from 'react';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Browse from './pages/browse';

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Route to Home */}
        <Route
          exact
          path={ROUTES.HOME}
          element={
          <Home />}
        />

        {/* Route to Sign In */}
        <Route 
        exact
        path ={ROUTES.SIGNIN}
        element={
          <SignIn />
        }/>

          {/* Route to Sign Up */}
          <Route
        exact 
        path ={ROUTES.SIGNUP}
        element={
          <SignUp />
        }/>

          {/* Route to Browse */}
          <Route
        exact
        path ={ROUTES.BROWSE}
        element={
          <Browse />
        }/>


      </Routes>
    </Router>
  );
}

