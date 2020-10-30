import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const PageHeader = () => (
    <>
      <PageHeaderWrapper>
		    <div className="container">
		        <PageContent className="page-content text-center">
		            <h2>About Us</h2>
		            <p>Saas startup html template.</p>
		        </PageContent>
		    </div>
      </PageHeaderWrapper>
    </>
)

const PageHeaderWrapper = styled.section`
  padding:100px 0;
  background-image: url(https://via.placeholder.com/1800x950.png/888888?text=SaasX);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top:80px;
  @media (max-width: 767px) {
    height:250px;
  }
`

const PageContent = styled.div`
  text-aling:center;
  h2 {
    color: #fff;
    font-size: 36px;
    @media (max-width: 767px) {
      font-size:30px;
    }
  }
  p {
    color: #ddd;
    margin: 0;
  }
`
  
PageHeader.propTypes = {
  
}

PageHeader.defaultProps = {
  
}

export default PageHeader