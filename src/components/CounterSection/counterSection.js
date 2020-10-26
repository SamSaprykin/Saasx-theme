import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./counterSection.css"

const CounterSection = () => (
  <>
    <section className="counter-section bg-grey bd-bottom padding">
        <div className="container">
            <div className="counter-wrap row">
                <div className="col-lg-6 sm-padding">
                    <div className="section-heading">
                        <h4 className="sub-heading">DO MORE WITH EMAUS</h4>
                        <h2>Over 1200+ completed <br />projects &amp; still counting.</h2>
                        <p>Use Emaus for free trial without the high costs. For the <br />big companies we offer premium features.</p>
                        <div className="counter-content row">
                            <div className="col-md-4 col-sm-6 wow fadeInUp padding-15">
                                <div className="counter-item">
                                    <i className="ti-face-smile"></i>
                                    <h2 className="counter">345</h2>
                                    <h3>Happy Clients</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 wow fadeInUp padding-15" data-wow-delay="200ms">
                                <div className="counter-item">
                                    <i className="ti-layers-alt"></i>
                                    <h2 className="counter">1830</h2>
                                    <h3>Project Done</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 wow fadeInUp padding-15" data-wow-delay="300ms">
                                <div className="counter-item">
                                    <i className="ti-cup"></i>
                                    <h2 className="counter">955</h2>
                                    <h3>Total Awards</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 sm-padding wow fadeInUp">
                    <div className="counter-img">
                        <img src="https://via.placeholder.com/860x550.png?text=SaasX" alt="saas" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
)

CounterSection.propTypes = {
  
}

CounterSection.defaultProps = {
  
}

export default CounterSection