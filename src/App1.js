import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';

import HelloWorld from './Components/HelloWorld';
import HelloReact from './Components/HelloReact';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <HelloWorld name="Eric"></HelloWorld> 
      <HelloWorld></HelloWorld>*/}
      {/* {name:"Tom",age:20} */}
      {/* <HelloReact name="Tom" age="20"></HelloReact> 
      <HelloReact name="Mary"></HelloReact> 
      <HelloReact name="Jack"></HelloReact> 
      <HelloReact name="Tracy"></HelloReact> 
     <HelloReact></HelloReact>  
      <Home></Home>
      <About></About>
      <Contact></Contact>*/}
      {/* 註解 ctrl + / */}
    </div>
    
    
    </BrowserRouter>
  );
}

export default App;
