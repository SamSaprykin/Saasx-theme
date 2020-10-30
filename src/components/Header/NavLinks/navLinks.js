import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
const NavLinks = () => (
  <>
    <StyledNav className="mainmenu">
        <ul className="nav">
            <li><Link to="/" className="nav-link" >Home<span className="sr-only">(current)</span></Link> 
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
            <li><Link to="/blog">Blog</Link> 
                <ul>
                    <li><Link to="/blog">Blog Grid</Link></li>
                    <li><Link to="/blog-classic">Blog Classic</Link></li>
                    <li><Link to="/blog-post">Blog Single</Link></li>
                </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </StyledNav>
  </>
)

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  transition: 0.2s;
  position: relative;
  z-index: 1010;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    max-width: 800px;
    width:100%;
    margin: 0 auto;
    justify-content: center;
    
  }
  @media (max-width: 576px) {
    top: 0;
    flex-direction: column;
    width: 200px;
    align-items: flex-start;
    margin-left: 0;
    .nav {
        flex-direction:column;
        margin-left:24px;
        li {
            a {
                font-size:24px;
            }
        }
    }
  }

  .active {
    color: #2550de;
    border-bottom: 3px solid #2550de;
    @media (max-width: 1024px) {
      border-bottom: 0;
      border-top: 3px solid #2550de;
    }
    @media (max-width: 425px) {
      border: none;
    }
  }
  a {
    @media (max-width: 1024px) {
        padding: 0 12px !important;
    }
  }
  
  
`

NavLinks.propTypes = {
  
}

NavLinks.defaultProps = {
  
}

export default NavLinks
