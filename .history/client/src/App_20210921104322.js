import React, {Fragment} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import ContactState from './context/contact/ContactState';
import Home from './components/pages/Home';
import About from './components/pages/About';
import AuthState from './context/auth/AuthState';
import './App.css';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <AuthState>
      <ContactState>
       <AlertState>
          <Router>
            <Fragment>
              <Navbar/>
              <div className="container">
                <Switch>
                  <Route exact path = '/' component = {Home}/>
                  <Route exact path = '/about' component = {About}/>
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
