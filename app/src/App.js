import React, { Component } from 'react';
import logo from './logo.svg';
import Eagle from './Eagle'
import Projects from './Projects'
import AboutMe from './AboutMe'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Eagle />
        <Projects />
        <AboutMe />
      </div>
    );
  }
}

export default App;
