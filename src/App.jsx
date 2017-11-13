import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './data/profile.js';
import Navbar from './components/Navbar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
        </div>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default App;


/** Application Hierarchy:

APP
    - NAVBAR
        - LEFT
            - HOME
        - CENTER
            - SEARCH
        - RIGHT
            - MENU
    - CONTENT
        - HEADER
            - PROFILE PIC
            - GENERAL INFO + STAT
        - GALLERY
            - ROW
                - 3 IMGS
    - FOOTER

*/