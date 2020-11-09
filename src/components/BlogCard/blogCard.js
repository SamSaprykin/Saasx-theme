import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const BlogIndex = ({cardData}) => {
    console.log(cardData)
    return (
        <Link to="/contact">
            <BlogCard>
                <Link to={`/blog/${cardData.node.slug}`}>
                <BlogTumb>
                    <Img fluid={cardData.node.blogPostBody.blogThumbnail.fluid} alt="post" />
                    <Category>{cardData.node.categories.map(category =>{ 
                        return(
                            <span>{category}</span>
                    )})}</Category>
                </BlogTumb>
                <BlogContent>
                    <h3><a href="#">{cardData.node.blogPostBody.blogTitle}</a></h3>
                    <p>{cardData.node.blogPostBody.conclusion}</p>
                    <a href="#" className="read-more">Read More</a>
                </BlogContent>
                </Link>
            </BlogCard>
        </Link>
        
    )
}



const BlogCard = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    cursor:pointer;
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
    p {
        color: #6a7695 !important;
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

BlogIndex.propTypes = {
  
}

BlogIndex.defaultProps = {
  
}

export default BlogIndex