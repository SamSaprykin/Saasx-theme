import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./moneyBackSection.css"

const MoneyBackSection = () => (
  <>
    <section className="moneyback-section padding">
      <div className="container">
          <div className="moneyback-img mb-25 text-center">
              <img src="/money-back.png" alt="money" />
          </div>
          <div className="moneybaack-contant text-center">
            <h2>100% Moneyback Guarantee</h2>
            <p>Buy with confidence: if you are not 100% satisfied with Margin and our complete service, <br/>we offer 30-day money back guarantee without any questions!</p>
          </div>
      </div>
    </section>
  </>
)

MoneyBackSection.propTypes = {
  
}

MoneyBackSection.defaultProps = {
  
}

export default MoneyBackSection