import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./pricingSection.css"

import AnimSide from "../Animation/AnimSide"

const PricingSection = () => (
  <>
    <section className="pricing-section bd-bottom bg-grey padding">
        <div className="container">
            <div className="pricing-wrappper row">
                <div className="col-lg-4 sm-padding">
                    <div className="section-heading">
                        <h4 className="sub-heading">Smart Contacts</h4>
                        <h2>Best Results <br />&amp; Reliability</h2>
                        <p>Choose a suitable package for your website and <br />join innovative minds</p>
                    </div>
                </div>
                <div className="col-lg-8 sm-padding">
                    <div className="pricing-wrap row">
                        <div className="col-sm-6 padding-15 wow fadeInLeft">
                            <AnimSide reversed="true">
                                <div className="pricing-box">
                                    <div className="pricing-head">
                                        <span>BEST CHOICE</span>
                                        <h3 className="pricing-price">$49<span>Monthly</span></h3>
                                        <h4 className="pricing-price">Basic Plan</h4>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><i className="fas fa-check"></i>Power And Predictive Dialing</li>
                                        <li><i className="fas fa-check"></i>Quality &amp; Customer Experience</li>
                                        <li><i className="fas fa-check"></i>24/7 phone and email support</li>
                                    </ul>
                                    <div className="pricing-footer">
                                        <a href="#" className="default-btn">Purchase Plan</a>
                                    </div>
                                </div>
                            </AnimSide>
                           
                        </div>
                        <div className="col-sm-6 padding-15 wow fadeInLeft" data-wow-delay="200ms">
                            <AnimSide delay="0.05" reversed="true">
                                <div className="pricing-box">
                                    <div className="pricing-head">
                                        <span>RISK FREE</span>
                                        <h3 className="pricing-price">$39<span>Monthly</span></h3>
                                        <h4 className="pricing-price">Standard Plan</h4>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><i className="fas fa-check"></i>Power And Predictive Dialing</li>
                                        <li><i className="fas fa-check"></i>Customer Experience</li>
                                    </ul>
                                    <div className="pricing-footer">
                                        <a href="#" className="default-btn">Purchase Plan</a>
                                    </div>
                                </div>
                            </AnimSide>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
)

PricingSection.propTypes = {
  
}

PricingSection.defaultProps = {
  
}

export default PricingSection