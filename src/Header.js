import React, {Component} from 'react';
import logo from './media/logo.svg';
import './Header.css';





//To see server http://172.20.10.8:3000/

class Header extends Component {
  render () {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <div className= "Paragraph">
            <p className = "Font-base">
              A gallery of my creative code projects
            </p>
            <p className = "Font-lg">
              by Beatriz Lopez Neira!!!
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

