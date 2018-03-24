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
	      <nav className="navbar navbar-default">
	          <div className="container-fluid">
	            <div className="navbar-header">
	              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	                <span className="sr-only">Toggle navigation</span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	              </button>
	              <a className="navbar-brand" href="#">Beans Love Beers</a>
	            </div>
	            <div className="collapse navbar-collapse">
	                <ul className="nav navbar-nav navbar-right">
	                    <li><NavLink exact activeclassName="activeNav" to="/">Home</NavLink></li>
	                    <li><NavLink activeclassName="activeNav" to="/favourites">Favourites</NavLink></li>
	                </ul>
	            </div>
	          </div>
	        </nav>
	        <Route exact path="/" component={Home} />
	        <Route path="/favourites" component={Favourites} />
	    </div>
    </Router>, document.getElementById('root'));

registerServiceWorker();
