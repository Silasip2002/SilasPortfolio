import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Resume from './components/Resume';
import Home from  './components/Home';



function App() {
  return (
    <>
      <CssBaseline/>
      <Router>
        <Route  path="/SilasPortfolio" component={Home}/>
        <Route  path="/resume" component={Resume}/>
      </Router>
  </>
  );
}

export default App;
