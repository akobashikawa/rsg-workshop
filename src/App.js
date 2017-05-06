import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// https://github.com/kevgathuku/react-bootstrap-jquery/blob/master/src/index.js
// https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/05-wrapping-dom-libs.md
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
window.jQuery = $;
require('bootstrap');

import logo from './logo.svg';
import './App.css';

import HelloWorld from './HelloWorld';
import HelloYou from './HelloYou';
import Hellos from './Hellos';
import Musicart from './Musicart';

const Home = () => (
  <div className="Home page">
    <h1>Home</h1>
    <p>
      React Study Group - Workshop 2017/05/06
    </p>
  </div>
);

const About = () => (
  <div className="About page">
    <h1>About</h1>
    <p>
      Simple layout con Bootstrap.
    </p>
  </div>
);

const Contact = () => (
  <div className="Contact page">
    <h1>Contact</h1>
    <p>
      http://rulo.me
    </p>
  </div>
);


const Navbar = (props) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">

        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <Link to={'/'} className="navbar-brand" >
          <img src={logo} className="App-logo" alt="logo" />
          React Workshop
        </Link>

      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Navbar />

          <main>
            <div className="container-fluid">
              <div className="row">

                <div className="col-sm-3 col-md-2 sidebar">
                  <ul className="nav nav-sidebar">
                    <li><Link to={'/example/helloworld'}>Hello World</Link></li>
                    <li><Link to={'/example/helloyou'}>Hello You</Link></li>
                    <li><Link to={'/example/hellos'}>Hellos</Link></li>
                    <li><Link to={'/example/musicart'}>Musicart</Link></li>
                  </ul>
                </div>

                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/example/helloworld" component={HelloWorld} />
                  <Route path="/example/helloyou" component={HelloYou} />
                  <Route path="/example/hellos" component={Hellos} />
                  <Route path="/example/musicart" component={Musicart} />
                </div>

              </div>
            </div>
          </main>

        </div>
      </Router>
    );
  }
}

export default App;
