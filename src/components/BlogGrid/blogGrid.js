import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BlogPagination from "../BlogPagination/blogPagination"
import "./blogGrid.css"

const BlogGrid = ({classic,paginationPosition}) => {
    let columnSize 
    if(classic) {
        columnSize = "lg-12"
    } else {
        columnSize = "sm-6"
    }
    return (
        <>
        <div className="col-lg-8 sm-padding">
            <div className="row">
                <div className={`col-${columnSize} padding-15`}>
                    <div className="blog-item">
                        <div className="blog-thumb">
                            <img src="https://via.placeholder.com/350x200.png?text=SaasX" alt="post" />
                            <span className="category"><a href="#">interior</a></span>
                        </div>
                        <div className="blog-content">
                            <h3><a href="#">Minimalist trending in modern architecture 2019</a></h3>
                            <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>
                <div className={`col-${columnSize} padding-15`}>
                    <div className="blog-item">
                        <div className="blog-thumb">
                            <img src="https://via.placeholder.com/350x200.png?text=SaasX" alt="post" />
                            <span className="category"><a href="#">Architecture</a></span>
                        </div>
                        <div className="blog-content">
                            <h3><a href="#">Terrace in the town yamazaki kentaro design workshop.</a></h3>
                            <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>
                <div className={`col-${columnSize} padding-15`}>
                    <div className="blog-item">
                        <div className="blog-thumb">
                            <img src="https://via.placeholder.com/350x200.png?text=SaasX" alt="post" />
                            <span className="category"><a href="#">Design</a></span>
                        </div>
                        <div className="blog-content">
                            <h3><a href="#">W270 house são paulo arquitetos fabio jorge architeqture.</a></h3>
                            <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>
                <div className={`col-${columnSize} padding-15`}>
                    <div className="blog-item">
                        <div className="blog-thumb">
                            <img src="https://via.placeholder.com/350x200.png?text=SaasX" alt="post" />
                            <span className="category"><a href="#">Design</a></span>
                        </div>
                        <div className="blog-content">
                            <h3><a href="#">Lascaux IV  snøhetta duncan lewis scape architecture.</a></h3>
                            <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>
                <div className={`col-${columnSize} padding-15`}>
                    <div className="blog-item">
                        <div className="blog-thumb">
                            <img src="https://via.placeholder.com/350x200.png?text=SaasX" alt="post" />
                            <span className="category"><a href="#">Design</a></span>
                        </div>
                        <div className="blog-content">
                            <h3><a href="#">Tai kwun centre for heritage de national meuron.</a></h3>
                            <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>
                <div className={`col-${columnSize} padding-15`}>
                    <div className="blog-item">
                        <div className="blog-thumb">
                            <img src="https://via.placeholder.com/350x200.png?text=SaasX" alt="post" />
                            <span className="category"><a href="#">Design</a></span>
                        </div>
                        <div className="blog-content">
                            <h3><a href="#">National memorial buildings for peace and justice.</a></h3>
                            <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPagination position={paginationPosition} />
        </div>      
      </>
    )
}
 


BlogGrid.propTypes = {
  
}

BlogGrid.defaultProps = {
  
}

export default BlogGrid