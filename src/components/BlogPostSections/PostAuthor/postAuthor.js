import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const PostAuthor = () => (
  <>
    <AuthorBox className="author-box bg-grey">
        <img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="img" />
        <AuthorInfo className="author-info">
            <h3>Albert Nouwen</h3>
            <p>Arkit is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design.</p>
            <SocialIcons className="social-icon">
                <li><a href="#"><i className="ti-facebook"></i></a></li>
                <li><a href="#"><i className="ti-twitter"></i></a></li>
                <li><a href="#"><i className="ti-instagram"></i></a></li>
                <li><a href="#"><i className="ti-pinterest"></i></a></li>
                <li><a href="#"><i className="ti-youtube"></i></a></li>
            </SocialIcons>
        </AuthorInfo>
    </AuthorBox>
  </>
)

const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  margin-top: 30px;
  border-left: 4px solid #2550de;
  background-color: #f9fafa;
  img {
    border-radius: 50%;
  }
`

const AuthorInfo = styled.div`
  padding-left: 30px;
  h3 {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 5px;
  }
`

const SocialIcons  = styled.ul`
   li {
    display: inline-block;
    margin-right: 8px;
    a {
      font-size: 14px;
      color: #263a4f;
      :hover {
        color: #2550de;
      }
    }
   }
`

PostAuthor.propTypes = {
  
}

PostAuthor.defaultProps = {
  
}

export default PostAuthor