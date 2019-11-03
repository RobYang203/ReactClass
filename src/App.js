import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Store from './Components/Store';
import Ads from './Components/Ads';
import Nav from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />

        <div className="row mt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header" />
              <div className="card-body">
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/about" component={About}></Route>
                  <Route strict path="/contact/" component={Contact}></Route>
                  <Route path="/store/:category" component={Store}></Route>
                </Switch>


              </div>
            </div>

          </div>
          {/* <div className="col-3">
<Ads/>
          </div> */}

        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
