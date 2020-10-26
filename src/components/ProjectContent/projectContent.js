import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./projectContent.css"

const ProjectContent = () => (
  <div className="container">
    <div className="project-img mb-50 pt-80">
        <img src="https://via.placeholder.com/1170x660.png?text=SaasX" alt="img" />
    </div>
    <div className="project-content-2 text-center mb-50">
        <h2>Project Overview</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium <br/>voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cuitate <br/>non provident, similique sunt in culpa qui officia deserunt mollitia animi,</p>
    </div>
    <div className="project-item text-center">
        <div className="row">
            <div className="col-md-3 col-sm-6 xs-padding">
                <div className="project-info">
                    <h3 className="title-project">Client</h3>
                    <span>Themeforest</span>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 xs-padding">
                <div className="project-info">
                    <h3 className="title-project">Created</h3>
                    <span>Romiz Raza</span>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 xs-padding">
                <div className="project-info">
                    <h3 className="title-project">Completed</h3>
                    <span>24 October 2019</span>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 xs-padding">
                <div className="project-info">
                    <h3 className="title-project">Skill</h3>
                    <span>Photoshop, UI/UX</span>
                </div>
            </div>
        </div>
    </div>
  </div>
)

ProjectContent.propTypes = {
  
}

ProjectContent.defaultProps = {
  
}

export default ProjectContent