import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./heroSection.css"

const HeroSection = () => (
  <>
  <section className="hero-section d-flex align-items-center bg-grey bd-bottom bd-top">
        <div className="container">
            <div className="hero-wrap row align-items-center">
                <div className="col-md-6 wow fadeInLeft">
                    <div className="hero-content">
                        <h4 className="sub-heading">TECHNOLOGY WITH ARTIFICIAL INTELLIGENCE</h4>
                        <h2>Drive More Customers <br />Through Digital</h2>
                        <p>Chap fantastic skive off chancer knees up starkers easy peasy up the <br />kyver David, bleeding the BBC tomfoolery chimney.!</p>
                        <a href="#" className="default-btn btn-hero">Our Features</a>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block wow fadeInRight">
                    <div className="hero-item">
                        <img src="https://via.placeholder.com/860x550.png?text=SaasX" alt="img" />
                    </div>
                </div>
            </div>
        </div>
  </section>
  </>
)

HeroSection.propTypes = {
  
}

HeroSection.defaultProps = {
  
}

export default HeroSection
