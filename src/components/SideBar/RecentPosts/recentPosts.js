import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const RecentPosts = () => (
  <>
    <WidgetContent>
        <h4>Recent Posts</h4>
        <ThumbPost>
            <li><img src="https://via.placeholder.com/100x56.png?text=SaasX" alt="post" /><a href="#">Minimalist trending in modern architecture 2019</a></li>
            <li><img src="https://via.placeholder.com/100x56.png?text=SaasX" alt="post" /><a href="#">Terrace in the town kentaro design workshop.</a></li>
            <li><img src="https://via.placeholder.com/100x56.png?text=SaasX" alt="post" /><a href="#">W270 house são arquitetos fabio architeqture.</a></li>
        </ThumbPost>
    </WidgetContent>
  </>
)

const WidgetContent = styled.div`
  h4{
    font-weight: 600;
  }
`

const ThumbPost = styled.ul`
  li{
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    align-items: top;
    margin-bottom: 20px;
    img {
      width: 100px;
      display: block;
    }
    a {
      font-family: "Poppins",sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: #263a4f;
      padding-left: 15px;
      letter-spacing: -0.5px;
      :hover {
        color: #2550de;
        text-decoration: underline;
      }
    }
  }
  
`

RecentPosts.propTypes = {
  
}

RecentPosts.defaultProps = {
  
}

export default RecentPosts