import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Store from './Components/Store';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Link to="/">首頁</Link> | <Link to="/about">關於我們</Link> | <Link to="/contact/">聯絡我們</Link><br/>
        <Link to="/store/sony">SONY</Link> | <Link to="/store/nikon">NIKON</Link>| <Link to="/store/canon">CANON</Link>
         <button type="button" className="btn btn-danger">Danger</button> 
         <hr/>
         <div className="alert alert-primary" role="alert">
         <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route strict path="/contact/" component={Contact}></Route>
          <Route path="/store/:category" component={Store}></Route>
         </Switch>
</div>
        
      </div>    
    </BrowserRouter>
  );
}

export default App;
