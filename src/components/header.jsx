import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav_container">
          <a className="navbar-logo" href="#top">
            <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/597/2142567597_cdb67e32-c819-41d3-aff0-5e8bd04bcc30.png?cb=1562626429" alt="header_logo_img"/>
          </a>
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#top">About</a>
            </li>
            <li className="nav-list-item">
              <a href="#top">Portfolio</a>
            </li>
            <li className="nav-list-item">
              <a href="#top">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
