import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BlogPagination from "../BlogPagination/blogPagination"
import styled from "styled-components"
import Img from "gatsby-image"

const BlogGrid = ({classic,paginationPosition,postsData}) => {
    let columnSize 
    if(classic) {
        columnSize = "lg-12"
    } else {
        columnSize = "sm-6"
    }
    console.log(postsData)
    return (
        <>
        <div className="col-lg-8 sm-padding">
            <div className="row">
            { postsData.map(card => {
            return (
                <div className={`col-${columnSize} padding-15`} >
                    <BlogItem>
                        <BlogTumb>
                            <Img fluid={card.node.blogPostBody.blogThumbnail.fluid} alt="post" />
                            <Category>{card.node.categories.map(category =>{ 
                            return(
                                <a href="#">{category}</a>
                            )})}</Category>
                        </BlogTumb>
                        <BlogContent>
                            <h3><a href="#">{card.node.blogPostBody.blogPostTitle}</a></h3>
                            <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                            <a href="#" className="read-more">Read More</a>
                        </BlogContent>
                    </BlogItem>
                </div>
            )
            })}
                
            </div>
            <BlogPagination position={paginationPosition} />
        </div>      
      </>
    )
}


const BlogItem = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const BlogTumb = styled.div`
    position: relative;
    img {
        width: 100%;
        margin: 0;
    }
`

const BlogContent = styled.div`
    background-color: #f9fafa;
    padding: 30px;
    h3 {
        font-size: 18px;
        line-height: 24px;
        font-weight: 600;
    }
    a {
        color: #263a4f;
    }
    .read-more {
        font-family: "Work Sans",sans-serif;
        color: #263a4f;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-left: 40px;
    }
    .read-more:before {
        background-color: #2550de;
        position: absolute;
        content: "";
        width: 30px;
        height: 4px;
        left: 0;
        top: calc(50% - 2px);
    }
`

const Category = styled.span`
    background-color: #2550de;
    padding: 5px 15px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Work Sans",sans-serif;
    position: absolute;
    width: auto;
    height: auto;
    left: 0;
    bottom: 0;
    a {
        color: #fff;
    }
`
 


BlogGrid.propTypes = {
  
}

BlogGrid.defaultProps = {
  
}

export default BlogGrid