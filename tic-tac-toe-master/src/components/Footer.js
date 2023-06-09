import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="#" target="_blank" rel="noreferrer noopener">
          Home
        </a>
        {" "}
        <a href="https://github.com/rudreshmodi/Tic-Tac-Toe-Game-using-React" target="_blank" rel="noreferrer noopener">
          Github
        </a>
      </footer>
    );
  }
}

export default Footer;
