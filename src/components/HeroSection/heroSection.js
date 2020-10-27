import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./heroSection.css"

import AnimSide from "../Animation/AnimSide"
const HeroSection = () => (
  <>
  <section className="hero-section d-flex align-items-center bg-grey bd-bottom bd-top">
        <div className="container">
            <div className="hero-wrap row align-items-center">
                <div className="col-md-6 wow fadeInLeft">
                    <AnimSide reversed="true">
                        <div className="hero-content">
                            <h4 className="sub-heading">TECHNOLOGY WITH ARTIFICIAL INTELLIGENCE</h4>
                            <h2>Drive More Customers <br />Through Digital</h2>
                            <p>Chap fantastic skive off chancer knees up starkers easy peasy up the <br />kyver David, bleeding the BBC tomfoolery chimney.!</p>
                            <a href="#" className="default-btn btn-hero">Our Features</a>
                        </div>
                    </AnimSide>
                </div>
                
                <div className="col-md-6 d-none d-md-block wow fadeInRight">
                    <AnimSide>
                        <div className="hero-item">
                            <img src="https://via.placeholder.com/860x550.png?text=SaasX" alt="img" />
                        </div>
                    </AnimSide>
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
