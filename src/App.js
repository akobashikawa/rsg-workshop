import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            {posts.map( post => <Link to={`/post/${post.id}`} key={post.id}>{post.title}</Link> )}
          </nav>
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/post/:postId" component={Post} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
