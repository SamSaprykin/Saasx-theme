import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./postBody.css"

const PostBody = () => (
  <>
    <div className="blog-thumb">
        <img src="https://via.placeholder.com/730x410.png?text=SaasX" alt="img" />
    </div>
    <div className="blog-single-content">
        <h2><a href="#">Minimalist trending in modern architecture 2019</a></h2>
        <ul className="single-post-meta">
            <li><i className="fa fa-user"></i> <a href="#">Admin</a></li>
            <li><i className="fa fa-calendar"></i> <a href="#">19 Feb, 2019</a></li>
            <li><i className="fa fa-comments"></i> <a href="#">2 Comments</a></li>
        </ul>
        <p>Architectural phenomenology is a movement within architecture that began in the 1950s, reaching a wide audience in the late 1970s and 1980s, and continuing until today. Architectural phenomenology focuses on human experience, background, intention and historical reflection, interpretation as well as poetic and ethical considerations with authors such as Gaston Bachelard.[21]</p>
        <p>Islamic architecture began in the 7th century CE, incorporating architectural forms from the ancient Middle East and Byzantium, but also developing features to suit the religious and social needs of the society. Examples can be found throughout the Middle East, North Africa, Spain and the Indian Sub-continent.</p>
        <blockquote>
            <div className="dots"></div>
            <p>“Architecture is really about well-being. I think that people want to feel good in a space… On the one hand it’s about shelter, but it’s also about pleasure.”</p>
            <span className="quoter">- Dr. Anders Ericsson</span>
        </blockquote>
        <p>The most important aspect of beauty was, therefore, an inherent part of an object, rather than something applied superficially, and was based on universal, recognisable truths. The notion of style in the arts was not developed until the 16th century, with the writing of Vasari:[11] by the 18th century, his Lives of the Most Excellent Painters, Sculptors, and Architects had been translated into Italian, French, Spanish, and English.</p>
        <ul className="post-tags">
            <li><a href="#">architecture</a></li>
            <li><a href="#">building</a></li>
            <li><a href="#">interior</a></li>
            <li><a href="#">design</a></li>
        </ul>
    </div>
  </>
)

PostBody.propTypes = {
  
}

PostBody.defaultProps = {
  
}

export default PostBody