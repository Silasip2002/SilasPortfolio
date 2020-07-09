import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Resume from './components/Resume';
import Home from  './components/Home';
import Portfolio from "./components/Portfolio"


function App() {
  return (
    <>
      <CssBaseline/>
      <Router>
        <Route  exact path="/SilasPortfolio" component={Home}/>
        <Route  exact path="/resume" component={Resume}/>
        <Route  exact path="/portfolio" component={Portfolio}/>
      </Router>
  </>
  );
}

export default App;
