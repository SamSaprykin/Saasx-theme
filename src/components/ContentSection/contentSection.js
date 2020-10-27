import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./contentSection.css"

import AnimSide from "../Animation/AnimSide"

const ContentSection = () => (
  <>
    <section className="content-section bd-bottom padding">
        <AnimSide reversed="true">
          <div className="image-wrapper">
            <img className="image-content" src="https://via.placeholder.com/980x500.png?text=SaasX" />
          </div>
        </AnimSide>
        <AnimSide>
            <div className="container">
                <div className="content-wrap">
                    <div className="col-lg-6 offset-lg-6 ">
                    <div className="content-item">
                        <h2>A Straight Forward Structure for Powerful Results</h2>
                        <p className="mb-15">Funding freemium technology focus equity bootstrapping usernce <br />niche market. Seed round agile development growth hacking retur <br/>investment alpha.Marketing pitch gen scrum project.</p>
                        <p>Responsive web design. Agile development innovator termsheet is users interface pitch scrum project research &amp; development.Get Started</p>
                        <a href="#" className="default-btn btn-content">Get Started</a>
                    </div>
                    </div>
                </div>
            </div>
        </AnimSide>
            
    </section>
  </>
)

ContentSection.propTypes = {
  
}

ContentSection.defaultProps = {
  
}

export default ContentSection