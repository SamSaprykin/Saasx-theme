import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./postAuthor.css"

const PostAuthor = () => (
  <>
    <div className="author-box bg-grey">
        <img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="img" />
        <div className="author-info">
            <h3>Albert Nouwen</h3>
            <p>Arkit is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design.</p>
            <ul class="social-icon">
                <li><a href="#"><i className="ti-facebook"></i></a></li>
                <li><a href="#"><i className="ti-twitter"></i></a></li>
                <li><a href="#"><i className="ti-instagram"></i></a></li>
                <li><a href="#"><i className="ti-pinterest"></i></a></li>
                <li><a href="#"><i className="ti-youtube"></i></a></li>
            </ul>
        </div>
    </div>
  </>
)

PostAuthor.propTypes = {
  
}

PostAuthor.defaultProps = {
  
}

export default PostAuthor