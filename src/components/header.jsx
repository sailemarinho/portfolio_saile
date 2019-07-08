import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (

      <nav className="navbar">
        <a className="navbar-logo" href="#top">
          <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/597/2142567597_cdb67e32-c819-41d3-aff0-5e8bd04bcc30.png?cb=1562626429" alt="header_logo_img"/>
        </a>

      </nav>



    );
  }
}

export default Header;












/*  <div className="header">
          <div className="header_container">
            <div style={{ display:'flex'}}>
              <div className="header_logo">
                <a href="#top">
                  <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/597/2142567597_cdb67e32-c819-41d3-aff0-5e8bd04bcc30.png?cb=1562626429" alt="header_logo_img"/>
                </a>
              </div>
              <div className="header_navigation_buttons">
                <ul className="header_nav-list">
                  <li className="header_nav-list__item header_text-hollow header_active">
                    <a href="/">Inicio</a>
                  </li>
                  <li className="header_nav-list__item header_text-hollow">
                    <a href="http://flix.e-sanar.com.br/pages/sobre">Sobre o Sanarflix</a>
                  </li>
                  <li className="header_nav-list__item header_text-hollow">
                    <a href="http://flix.e-sanar.com.br/pages/faq">Perguntas frequentes</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */
