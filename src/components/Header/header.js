import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import "./header.css"

import NavLinks from "./NavLinks/navLinks"

import styled from "styled-components"

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    
    return (
        <>
        <HeaderWrapper className="header-section">
            <HeaderContainer>
                <StyledNavbar>
                    <LogoWrapper>
                        <Link to="/" className="brand-logo"><img src="/logo-dark.png" alt="Saasx" /></Link>
                    </LogoWrapper>
                    
                    <div className="d-flex menu-wrap">
                        
                        {navbarOpen ? (
                            <Navbox>
                                <NavLinks />
                            </Navbox>
                        ) : (
                            <Navbox open>
                                <NavLinks />
                            </Navbox>
                        )}
                        <WhiteBlock />
                        <LogoWrapper>
                            <DefaultButton>Get Quote</DefaultButton>
                        </LogoWrapper>
                        
                        
                        <Toggle
                          navbarOpen={navbarOpen}
                          onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                          {navbarOpen ? <Hamburger open /> : <Hamburger />}
                        </Toggle>
                    </div>
                </StyledNavbar>
            </HeaderContainer>
        </HeaderWrapper>
        
        </>
    )
}



const DefaultButton = styled.button`
    background-color: #2550de;
    text-transform: uppercase;
    font-family: "Work Sans",sans-serif;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
    line-height: 50px;
    font-weight: 600;
    display: inline-block;
    letter-spacing: 0.5px;
    padding: 0 30px;
    -webkit-box-shadow: 0 3px 10px rgba(71, 44, 173, 0.2);
    box-shadow: 0 3px 10px rgba(71, 44, 173, 0.2);
    cursor:pointer;
    
    :hover{
        background-color: #263a4f;
        color: #fff;
    }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  height: auto;
  position: relative;
  

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content:center;
    position: absolute;
    width: 100%;
    justify-content: flex-start;
    background-color: #fff;
    transition: all 0.3s ease-in;
    left: 0;
    top: ${props => (props.open ? "0" : "60px")};
    height: 80px;
    z-index: 0;
  }
  @media (max-width: 576px) {
    height: 100vh;
    width: 100%;
    background-color: #fff;
    top: ${props => (props.open ? "-100vh" : "0")};
  }
`

const StyledNavbar  = styled.div`
    border: medium none;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    -ms-border-radius: 0;
    border-radius: 0;
    margin: 0;
    position: relative;
    padding: 0;
    height:80px !important;
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-color:#ffffff;
`

const Toggle = styled.div`
  display: none;
  height: 80px;
  cursor: pointer;
  padding: 0 16px;
  background-color: #ffffff;
  position: relative;
  z-index: 1001;
  @media (max-width: 1024px) {
    display: flex;
    height: 60px;
  }
  @media (max-width: 425px) {
    padding: 0;
  }
`

const HeaderWrapper = styled.header`
    background-color: #fff;
    width: 100%;
    height: 80px;
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    padding: 0;
    li ul{
        background-color: #fff;
        width: 200px;
        height: auto;
        position: absolute;
        left: 0;
        top: 140%;
        visibility: hidden;
        opacity: 0;
        -webkit-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        z-index: 999;
    }
    li:hover > ul{
        visibility: visible;
        opacity: 1;
        top: 100%;
        @media (max-width: 576px) {
            display:none;
        }
    }
    li ul li{
        border-bottom: 1px solid #e5e5e5;
        display: block;
        position: relative;
        padding: 0;
    }
    li ul li:last-child{
        border: none;
    }
    li ul li a{
        font-family: 'Source Sans Pro', sans-serif;
        line-height: 45px;
        display: block;
        padding: 0 15px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.2px;
        color: #8d9aa8;
        -webkit-transition: color 0.3s ease 0s, padding 0.3s ease 0s;
        transition: color 0.3s ease 0s, padding 0.3s ease 0s;
        @media (max-width: 576px) {
           color: #2550de;
           font-size:18px;
        }
    }
    
`

const HeaderContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 750px;
    }
    @media (min-width: 992px) {
        max-width: 1070px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    @media (max-width: 1024px) {
        max-width:100%;
        padding:0;
    }
`

const Hamburger = styled.div`
  background-color: #263a4f;
  width: 24px;
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 24px;
    height: 2px;
    background-color: #2550de;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-6px, 0px)" : "rotate(0deg)"};
    top: -6px;
    @media (max-width: 425px), {
      top: -6px;
      transform: ${props =>
        props.open ? "rotate(-90deg) translate(-6px, 0px)" : "rotate(0deg)"};
    }
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 6px;
    @media (max-width: 425px) {
      top: 6px;
      transform: ${props =>
        props.open ? "rotate(-90deg) translate(6px, 0px)" : "rotate(0deg)"};
    }
  }
  @media (max-width: 425px) {
    width: 22px;
    height: 2px;
    margin-right: 16px;
    margin-bottom: 8px;
  }
`

const LogoWrapper = styled.div`
  position:relative;
  z-index:10000;
  display:flex;
  align-items:center;
  @media (max-width: 1024px) {
    padding:0 64px;
  }
  @media (max-width: 768px) {
    padding:0 32px;
  }
  @media (min-width: 576px) {
    padding:0 16px;
  }
`

const WhiteBlock = styled.div`
  display:none;
  @media (max-width: 1024px) {
    display:block;
    position:absolute;
    height:80px;
    z-index:100;
    width:100%;
    top:0;
    left:0;
    background-color:white;
  }
`

Header.propTypes = {
  
}

Header.defaultProps = {
  
}

export default Header
