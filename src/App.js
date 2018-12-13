import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AppNavbar from './components/layout/navbar/AppNavbar'
import HomePage from './components/layout/homepage/HomePage'

import Spinner from './components/layout/Spinner'


export default class App extends Component {

  
  render() {

    let display ='';
    
    if(HomePage){
      display = (
      <HomePage></HomePage>)
    }else{
      display=(<Spinner></Spinner>)}

    return (
      
      <Router>
      <div className="App">
        
          <AppNavbar></AppNavbar>
          {display}
      </div>
      </Router>
    )
  }
}
