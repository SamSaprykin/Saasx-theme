import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const BlogIndex = ({cardData}) => {
    return (
        <Link to="/contact">
            <BlogCard>
                <BlogTumb>
                    <img src="https://via.placeholder.com/350x200.png?text=SaasX" alt="post" />
                    <Category>interior</Category>
                </BlogTumb>
                <BlogContent>
                    <h3><a href="#">Minimalist trending in modern architecture 2019</a></h3>
                    <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                    <a href="#" className="read-more">Read More</a>
                </BlogContent>
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