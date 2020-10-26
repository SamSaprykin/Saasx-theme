import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./featuresSection.css"

const FeaturesSection = ({leftSide}) => {
    let columnSize 
    let columnWrapper
    if(leftSide) {
        columnSize = "lg-6"
        columnWrapper = "lg-6"
    } else {
        columnSize = "lg-3"
        columnWrapper = "lg-12"
    }
    return (
    <section className="feature-section bd-bottom padding">
        <div className="container">
            <div className="feature-wrap row">
                { leftSide && (
                    <div className="col-lg-6 wow fadeInLeft sm-padding">
                        <div className="feature-content">
                            <div className="section-heading">
                                <h4 className="sub-heading">Our Features</h4>
                                <h2 className="title-features">Revolutionize your online <br />business today!</h2>
                            </div>
                            <p>The business carrent account that is your Accounting software.
                            <br />A simple way to run your business</p>
                            <a href="#" className="play-btn">
                                <i className="fa fa-play-circle"></i><span>Watch Video</span>
                            </a>
                        </div>
                    </div>
                )}
                
                <div className={`col-${columnWrapper} sm-padding`}>
                    <div className="row">
                        <div className={`col-${columnSize} padding-15`}>
                            <div className="feature-item">
                                <i className="ti-bar-chart"></i>
                                <h3 className="title-features">Data Analytics</h3>
                                <p>The business carrent account that is your Accounting software.
                                A simple way to run your business</p>
                            </div>
                        </div>
                        <div className={`col-${columnSize} padding-15`} >
                            <div className="feature-item">
                                <i className="ti-agenda"></i>
                                <h3 className="title-features">Unlimited Bandwidth</h3>
                                <p>The business carrent account that is your Accounting software.
                                A simple way to run your business</p>
                            </div>
                        </div>
                        <div className={`col-${columnSize} padding-15`}>
                            <div className="feature-item">
                                <i className="ti-layers-alt"></i>
                                <h3 className="title-features">Intellegent Chart</h3>
                                <p>The business carrent account that is your Accounting software. A simple way to run your business</p>
                            </div>
                        </div>
                        <div className={`col-${columnSize} padding-15`}>
                            <div className="feature-item">
                                <i className="ti-pie-chart"></i>
                                <h3 className="title-features">Cloud Data Saved</h3>
                                <p>The business carrent account that is your Accounting software. A simple way to run your business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}


FeaturesSection.propTypes = {
  
}

FeaturesSection.defaultProps = {
  
}

export default FeaturesSection