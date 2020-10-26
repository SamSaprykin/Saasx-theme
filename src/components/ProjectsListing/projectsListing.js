import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./projectsListing.css"

const ProjectsListing = () => (
  <>
    <section className="project-section padding">
        <div className="container">
            <div className="project-wrap row">
                <div className="col-lg-4 col-md-6 padding-15">
                    <div className="project-box">
                        <img src="https://via.placeholder.com/350x350.png?text=SaasX" alt="port" />
                        <div className="project-content">
                            <div className="project-content-inner">
                                <h3><a href="#">Notepad Mockup</a></h3>
                                <span>We combine practice of managing and analyzing project management to its full performance</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 padding-15">
                    <div className="project-box">
                        <img src="https://via.placeholder.com/350x350.png?text=SaasX" alt="port" />
                        <div className="project-content">
                            <div className="project-content-inner">
                                <h3><a href="#">Folded Paper</a></h3>
                                <span>We combine practice of managing and analyzing project management to its full performance</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 padding-15">
                    <div className="project-box">
                        <img src="https://via.placeholder.com/350x350.png?text=SaasX" alt="port" />
                        <div className="project-content">
                            <div className="project-content-inner">
                                <h3><a href="#">Hot Fruit</a></h3>
                                <span>We combine practice of managing and analyzing project management to its full performance</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 padding-15">
                    <div className="project-box">
                        <img src="https://via.placeholder.com/350x350.png?text=SaasX" alt="port" />
                        <div className="project-content">
                            <div className="project-content-inner">
                                <h3><a href="#">Woman"s Corner</a></h3>
                                <span>We combine practice of managing and analyzing project management to its full performance</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 padding-15">
                    <div className="project-box">
                        <img src="https://via.placeholder.com/350x350.png?text=SaasX" alt="port" />
                        <div className="project-content">
                            <div className="project-content-inner">
                                <h3><a href="#">Oxygen Bottle</a></h3>
                                <span>We combine practice of managing and analyzing project management to its full performance</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 padding-15">
                    <div className="project-box">
                        <img src="https://via.placeholder.com/350x350.png?text=SaasX" alt="port" />
                        <div className="project-content">
                            <div className="project-content-inner">
                                <h3><a href="#">Shocks Mockup</a></h3>
                                <span>We combine practice of managing and analyzing project management to its full performance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
)

ProjectsListing.propTypes = {
  
}

ProjectsListing.defaultProps = {
  
}

export default ProjectsListing