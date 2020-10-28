import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const PostBody = () => (
  <>
    <BlogTumb className="blog-thumb">
        <img src="https://via.placeholder.com/730x410.png?text=SaasX" alt="img" />
    </BlogTumb>
    <BlogContentWrapper className="blog-single-content">
        <h2><a href="#">Minimalist trending in modern architecture 2019</a></h2>
        <BlogPostMeta className="single-post-meta">
            <li><i className="fa fa-user"></i> <a href="#">Admin</a></li>
            <li><i className="fa fa-calendar"></i> <a href="#">19 Feb, 2019</a></li>
            <li><i className="fa fa-comments"></i> <a href="#">2 Comments</a></li>
        </BlogPostMeta>
        <p>Architectural phenomenology is a movement within architecture that began in the 1950s, reaching a wide audience in the late 1970s and 1980s, and continuing until today. Architectural phenomenology focuses on human experience, background, intention and historical reflection, interpretation as well as poetic and ethical considerations with authors such as Gaston Bachelard.[21]</p>
        <p>Islamic architecture began in the 7th century CE, incorporating architectural forms from the ancient Middle East and Byzantium, but also developing features to suit the religious and social needs of the society. Examples can be found throughout the Middle East, North Africa, Spain and the Indian Sub-continent.</p>
        <StyledBlockquote>
            <div className="dots"></div>
            <p>“Architecture is really about well-being. I think that people want to feel good in a space… On the one hand it’s about shelter, but it’s also about pleasure.”</p>
            <span>- Dr. Anders Ericsson</span>
        </StyledBlockquote>
        <p>The most important aspect of beauty was, therefore, an inherent part of an object, rather than something applied superficially, and was based on universal, recognisable truths. The notion of style in the arts was not developed until the 16th century, with the writing of Vasari:[11] by the 18th century, his Lives of the Most Excellent Painters, Sculptors, and Architects had been translated into Italian, French, Spanish, and English.</p>
        <PostTags >
            <li><a href="#">architecture</a></li>
            <li><a href="#">building</a></li>
            <li><a href="#">interior</a></li>
            <li><a href="#">design</a></li>
        </PostTags>
    </BlogContentWrapper>
  </>
)
const BlogTumb = styled.div`
    img{
        margin-bottom: 20px;
    }
`

const BlogContentWrapper = styled.div`
    h2 a{
        font-size: 28px;
        color: #263a4f;
    }
`

const BlogPostMeta = styled.ul`
    margin-bottom: 20px;
    li{
        display: inline-block;
        margin-right: 20px;
    }
    li i{
        font-size: 12px;
        color: #2550de;
        margin-right: 5px;
    }
    li a{
        display: inline-block;
        font-family: "Work Sans",sans-serif;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        color: #263a4f;
    }
`

const StyledBlockquote = styled.blockquote`
    background-color: #f5f5f5;
    padding: 40px;
    border-left: 4px solid #2550de;
    margin: 30px 0;
    position: relative;
    z-index: 1;
    .dots {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: url(/bg-dots.png) 0 0 repeat;
        z-index: -1;
    }
    p {
        color: #263a4f;
        font-size: 20px;
        
    } 
    span {
        display: block;
        margin-top: 20px;
        color: #263a4f;
    }
    
`

const PostTags = styled.ul`
    margin-top: 30px;
    li{
        display: inline-block;
        a {
            display: inline-block;
            background-color: #2550de;
            padding: 5px 10px;
            border-radius: 2px;
            font-size: 12px;
            color: #fff;
            margin: 3px;
            :hover{
                background-color: #263a4f;
                color: #fff;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }
        }
    }
`

PostBody.propTypes = {
  
}

PostBody.defaultProps = {
  
}

export default PostBody