import React, {Fragment} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Fragment className="App">
        <Navbar/>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/about' component = {About}/>
        </Switch>
      </Fragment>
    </Router>
    
  );
}

export default App;
