import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./pageHeader.css"


const PageHeader = () => (
    <>
      <section className="page-header padding">
		    <div className="container">
		        <div className="page-content text-center">
		            <h2>About Us</h2>
		            <p>Saas startup html template.</p>
		        </div>
		    </div>
      </section>
    </>
  )
  
  PageHeader.propTypes = {
    
  }
  
  PageHeader.defaultProps = {
    
  }
  
  export default PageHeader