import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./projectSkills.css"

const ProjectSkills = () => (
  <div className="container">
    <div className="row padding">
        <div className="skill-wrapper">
            <img src="https://via.placeholder.com/1170x550.png?text=SaasX" alt="img" />
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="skill-content mt-50">
                        <h2>Project Skills &amp; Expertise</h2>
                        <p>Funding freemium technology focus equity bootstrapping usernce niche <br/>market. Seed round agile development growth hacking retur investment <br/>alpha.Marketing pitch gen scrum project.Responsive web design. Agile <br/>development innovator termsheet is</p>
                    </div>
                </div>
                <div className="col-md-6">
                <ul className="skill_items mt-50">
                    <li className="skill_item">
                        <h3>Design</h3>
                        <div className="progress">
                            <div className="progress-bar wow slideInLeft"  role="progressbar" style={{width: "80%"}} >
                                <span className="progress-text">80%</span>
                            </div>
                        </div>
                    </li>
                    <li className="skill_item">
                        <h3>Development</h3>
                        <div className="progress">
                            <div  className="progress-bar wow slideInLeft"  role="progressbar" style={{width: "90%"}} >
                                <span className="progress-text">90%</span>
                            </div>
                        </div>
                    </li>
                    <li className="skill_item">
                        <h3>Marketing</h3>
                        <div className="progress">
                            <div className="progress-bar wow slideInLeft"  role="progressbar" style={{width: "75%"}} >
                                <span className="progress-text">75%</span>
                            </div>
                        </div>
                    </li>
                    <li className="skill_item">
                        <h3>WordPress</h3>
                        <div className="progress">
                            <div className="progress-bar wow slideInLeft"  role="progressbar" style={{width: "65%"}} >
                                <span className="progress-text">65%</span>
                            </div>
                        </div>
                    </li>
                </ul>
                    </div>
                </div>
        </div>
    </div>
  </div>
)

ProjectSkills.propTypes = {
  
}

ProjectSkills.defaultProps = {
  
}

export default ProjectSkills