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

const Home = () => (
  <div className="Home page">
    <h1>Home</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad, ipsa rerum sit! Temporibus minima placeat commodi optio explicabo fugiat, rerum modi autem molestiae accusantium ratione. Exercitationem omnis, minus distinctio.
    </p>
  </div>
);

const About = () => (
  <div className="About page">
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quia vero, corporis vel rerum cum assumenda voluptates aperiam in vitae, illum dolore. Obcaecati repudiandae corporis aspernatur, nihil temporibus dolore quae!
    </p>
  </div>
);

const Contact = () => (
  <div className="Contact page">
    <h1>Contact</h1>
    <p>
      @rulokoba
    </p>
  </div>
);

const posts = [
  {id: '001', title: 'Alpha'},
  {id: '002', title: 'Beta'},
  {id: '003', title: 'Gamma'}
];

const Post = ({ match }) => {
  const post = posts.filter(post => post.id === match.params.postId)[0];
  if (!post) {
    return null;
  }
  return (
    <div>
      <h3>{match.params.postId}</h3>
      <h1>{post.title}</h1>
    </div>
  )
};

/*
class Post extends Component {
  render() {
    let match = this.props.match;
    const post = posts.filter(post => post.id === match.params.postId)[0];
    if (!post) {
      return null;
    }
    return (
      <div>
        <h3>{match.params.postId}</h3>
        <h1>{post.title}</h1>
      </div>
    )
  }
}
*/


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
                    {posts.map( post => <li key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li> )}
                  </ul>
                </div>

                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/post/:postId" component={Post} />
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
