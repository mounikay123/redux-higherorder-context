import React, { Component } from 'react';
import './App.css';
import Home from '../src/components/home'
import ComponentC from '../src/components/componentC'
import {UserProvider} from '../src/context/userContext'
import HigherOnClick from '../src/components/higherOnClick'
import HoverOnCount from '../src/components/hoverOnCount'

class App extends Component {
 
  render() {
   
    return (
      <div className="App">
         <Home />
         <HigherOnClick />
         <HoverOnCount />
       <UserProvider value="Talentscreen">
        <ComponentC />
        </UserProvider >
      </div>
    );
  }
}

export default App;
