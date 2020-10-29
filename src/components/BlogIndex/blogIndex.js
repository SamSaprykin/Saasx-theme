import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
 
import styled from "styled-components"

import BlogCard from "../BlogCard/blogCard"

const BlogIndex = () => (
  <>
     <BlogSection>
        <Container>
            <SectionHeading>
                <span>From Blog</span>
                <h2>Speciallized news</h2>
            </SectionHeading>
            <div className="row blog-wrap">
                <div className="col-lg-4 col-sm-6 sm-padding">
                    <BlogCard />
                </div>
                <div className="col-lg-4 col-sm-6 sm-padding">
                    <BlogItem>
                        <BlogTumb>
                            <img src="https://via.placeholder.com/350x200.png?text=SaasX" alt="post" />
                            <Category><a href="#">Architecture</a></Category>
                        </BlogTumb>
                        <BlogContent>
                            <h3><a href="#">Terrace in the town yamazaki kentaro design workshop.</a></h3>
                            <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                            <a href="#" className="read-more">Read More</a>
                        </BlogContent>
                    </BlogItem>
                </div>
                <div className="col-lg-4 col-sm-6 sm-padding">
                    <BlogItem>
                        <BlogTumb>
                            <img src="https://via.placeholder.com/350x200.png?text=SaasX" alt="post" />
                            <Category><a href="#">Design</a></Category>
                        </BlogTumb>
                        <BlogContent>
                            <h3><a href="#">W270 house são paulo arquitetos fabio jorge architeqture.</a></h3>
                            <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                            <a href="#" className="read-more">Read More</a>
                        </BlogContent>
                    </BlogItem>
                </div>
            </div>
        </Container>
    </BlogSection>
  </>
)

const BlogSection = styled.section`
    padding: 100px 0;
    border-bottom: 1px solid #e5e5e5;
    @media (max-width: 767px) {
        padding: 60px 0;
    }
`

const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 750px;
    }
    @media (min-width: 992px) {
        max-width: 970px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`

const SectionHeading = styled.div`
    margin-bottom: 40px;
    text-align:center !important;
    h2 {
        font-size: 32px;
        line-height: 42px;
        color: #263a4f;
        margin: 0 0 10px;
        font-weight: 600;
        letter-spacing: -1px;
        font-family:'Poppins';
    }
`


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

BlogIndex.propTypes = {
  
}

BlogIndex.defaultProps = {
  
}

export default BlogIndex