import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./ctaSection.css"

import AnimeUp from "../Animation/AnimeUp"

const CtaSection = () => (
  <>
    <section className="cta-section padding">
        <div className="container">
            <AnimeUp>
              <div className="cta-content text-center wow fadeInUp">
                  <h2>Manage any Projects with SaasX</h2>
                  <p>We combine practice of managing and analyzing project management to its full performance <br />and maximize its effectiveness and stay to of everything</p>
                  <a href="#" className="default-btn">Start Free Trial</a>
              </div>
            </AnimeUp>
        </div>
    </section>
  </>
)

CtaSection.propTypes = {
  
}

CtaSection.defaultProps = {
  
}

export default CtaSection