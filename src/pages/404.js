import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="error-section padding bd-top">
		    <div className="container">
		        <div className="error-content text-center">
		            <img src="/404.png" alt="img" />
		            <div className="error-info">
		                <h2>404</h2>
		                <p>Aha! You see! You can be wrong! <br/>...either way, you should probably <br/> <Link to="/">Go Back To Homapage</Link></p>
		            </div>
		        </div>
		    </div>
		</section>
  </Layout>
)

export default NotFoundPage
