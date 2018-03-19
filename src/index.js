import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Favourites from './components/Favourites';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div className="container">
          <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="#">Beans Love Beers</a>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li ><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="activeNav" to="/favourites">Favourites</NavLink></li>
                    </ul>
                </div>
              </div>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/favourites" component={Favourites} />
        </div>
    </Router>, document.getElementById('root')
);
registerServiceWorker();
