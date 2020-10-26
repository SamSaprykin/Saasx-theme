import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./pricingTable.css"

const PricingTable = () => (
  <>
    <section className="pricing-section bd-bottom bg-grey padding">
        <div className="container">
            <div className="section-heading text-center mb-40">
                <span>Smart Contacts</span>
                <h2>Best Results &amp; Reliability</h2>
                <p>Choose a suitable package for your website and <br />join innovative minds</p>
            </div>
            
            <div className="pricing-wrap row">
                <div className="col-lg-4 col-sm-6 padding-15">
                    <div className="pricing-box">
                        <div className="pricing-head">
                            <span>BEST CHOICE</span>
                            <h3 className="pricing-price">$29<span>Weekly</span></h3>
                            <h4 className="pricing-price">Basic Plan</h4>
                            <p>An entry tool for those who started. Forever free.</p>
                        </div>
                        <ul className="pricing-list">
                            <li><i className="fas fa-check"></i>1 User</li>
                            <li><i className="fas fa-check"></i>Unlimited projects</li>
                            <li><i className="fas fa-check"></i>Lifetime Updates</li>
                            <li><i className="fas fa-check"></i>1 year Support</li>
                        </ul>
                        <div className="pricing-footer">
                            <a href="#" className="default-btn">Purchase Plan</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 padding-15">
                    <div className="pricing-box">
                        <div className="pricing-head">
                            <span>RISK FREE</span>
                            <h3 className="pricing-price">$39<span>Monthly</span></h3>
                            <h4 className="pricing-price">Standard Plan</h4>
                            <p>An entry tool for those who started. Forever free.</p>
                        </div>
                        <ul className="pricing-list">
                            <li><i className="fas fa-check"></i>1 User</li>
                            <li><i className="fas fa-check"></i>Unlimited projects</li>
                            <li><i className="fas fa-check"></i>Lifetime Updates</li>
                            <li><i className="fas fa-check"></i>1 year Support</li>
                        </ul>
                        <div className="pricing-footer">
                            <a href="#" className="default-btn">Purchase Plan</a>
                        </div>
                    </div>
                </div>
                    <div className="col-lg-4 col-sm-6 padding-15">
                    <div className="pricing-box">
                        <div className="pricing-head">
                            <span>BEST CHOICE</span>
                            <h3 className="pricing-price">$49<span>Yearly</span></h3>
                            <h4 className="pricing-price">Premium Plan</h4>
                            <p>An entry tool for those who started. Forever free.</p>
                        </div>
                        <ul className="pricing-list">
                            <li><i className="fas fa-check"></i>1 User</li>
                            <li><i className="fas fa-check"></i>Unlimited projects</li>
                            <li><i className="fas fa-check"></i>Lifetime Updates</li>
                            <li><i className="fas fa-check"></i>Premium Support</li>
                        </ul>
                        <div className="pricing-footer">
                            <a href="#" className="default-btn">Purchase Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
)

PricingTable.propTypes = {
  
}

PricingTable.defaultProps = {
  
}

export default PricingTable