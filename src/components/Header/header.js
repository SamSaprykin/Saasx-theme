import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = () => (
  <>
  <header id="header" className="header-section">
      <div className="container">
          <nav className="navbar ">
              <Link to="/" className="brand-logo"><img src="/logo-dark.png" alt="Saasx" /></Link>
              <div className="d-flex menu-wrap">
                  <div id="mainmenu" className="mainmenu">
                      <ul className="nav">
                          <li><Link to="/" className="nav-link active" >Home<span className="sr-only">(current)</span></Link> 
                          </li>
                          <li><Link to="/about">About Us</Link></li>
                          <li><Link to="/features">Features</Link></li>
                          <li><Link to="/projects">Projects</Link> 
                              <ul>
                                  <li><a href="projects.single.html">Projects Single</a></li>
                              </ul>
                          </li>
                          <li><a href="#">Pages</a> 
                              <ul>
                                  <li><a href="team.html">Our Team</a></li>
                                  <li><a href="pricing.html">Pricing Table</a></li>
                                  <li><a href="404.html">404 Error</a></li>
                              </ul>
                          </li>
                          <li><a href="#">Blog</a> 
                              <ul>
                                  <li><a href="blog-grid.html">Blog Grid</a></li>
                                  <li><a href="blog-classic.html">Blog Classic</a></li>
                                  <li><a href="blog-single.html">Blog Single</a></li>
                              </ul>
                          </li>
                          <li><a href="contact.html">Contact</a></li>
                      </ul>
                  </div>
                  <div className="header-btn">
                      <a href="#" className="default-btn">Get Quote</a>
                  </div>
              </div>
          </nav>
      </div>
  </header>
  <div className="header-height"></div>
  </>
)

Header.propTypes = {
  
}

Header.defaultProps = {
  
}

export default Header
