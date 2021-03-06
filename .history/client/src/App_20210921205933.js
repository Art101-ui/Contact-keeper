import React, {Fragment} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Alert from './components/layout/Alert'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlertState from './context/alert/AlertState';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import './App.css';


function App() {
  return (
    <AuthState>
      <ContactState>
       <AlertState>
          <Router>
            <Fragment>
              <Navbar/>
              <div className="container">
                <Alert/>
                <Switch>
                  <Route exact path = '/' component = {Home}/>
                  <Route exact path = '/about' component = {About}/>
                  <Route exact path = '/register' component = {Register}/>
                  <Route exact path = '/register' component = {Login}/>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
