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
                                  <li><Link to="/project-page">Projects Single</Link></li>
                              </ul>
                          </li>
                          <li><a href="#">Pages</a> 
                              <ul>
                                  <li><Link to="/our-team">Our Team</Link></li>
                                  <li><Link to="/pricing-table">Pricing Table</Link></li>
                                  <li><Link to="/404">404 Error</Link></li>
                              </ul>
                          </li>
                          <li><a href="#">Blog</a> 
                              <ul>
                                  <li><Link to="/blog-listing">Blog Grid</Link></li>
                                  <li><Link to="/blog-classic">Blog Classic</Link></li>
                                  <li><Link to="/blog-post">Blog Single</Link></li>
                              </ul>
                          </li>
                          <li><Link to="/contact">Contact</Link></li>
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
