import React, {Fragment} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <Fragment className="App">
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route exact path = '/about' component = {About}/>
          </Switch>
        </div>
      </Fragment>
    </Router>
    
  );
}

export default App;
