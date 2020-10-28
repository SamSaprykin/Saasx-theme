import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const PostNavigation = () => (
  <>
    <PostNavigationStyled>
        <div className="col prev-post">
            <a href="#"><i className="ti-arrow-left"></i>Prev Post</a>
        </div>
        <div className="col next-post">
            <a href="#">Next Post <i className="ti-arrow-right"></i></a>
        </div>
    </PostNavigationStyled>
  </>
)

const PostNavigationStyled = styled.div`
  border: 1px solid #e5e5e5;
  margin-top: 40px;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-wrap: wrap;
  .col{
    padding: 20px;
  }
  a{
    color: #263a4f;
    font-size: 12px;
    text-transform: uppercase;
    font-family: "Work Sans",sans-serif;
    font-weight: 600;
    display: flex;
    align-items: center;
    :hover {
      color: #2550de;
    }
  }
  .next-post a{
    justify-content: flex-end;
    
  }
  i{
    display: inline-block;
    font-size: 14px;
  }
  .ti-arrow-left{
    margin-right: 10px;
  }
  .ti-arrow-right{
    margin-left: 10px;
  }
  .prev-post .fa{
    margin-right: 10px;
  }
  .fa{
    margin-left: 10px;
  }
` 

PostNavigation.propTypes = {
  
}

PostNavigation.defaultProps = {
  
}

export default PostNavigation