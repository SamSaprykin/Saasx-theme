import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const MoneyBackSection = () => (
  <>
    <StyledSection>
      <Container>
          <ImageWrapper>
              <img src="/money-back.png" alt="money" />
          </ImageWrapper>
          <ContentWrapper>
            <h2>100% Moneyback Guarantee</h2>
            <p>Buy with confidence: if you are not 100% satisfied with Margin and our complete service, <br/>we offer 30-day money back guarantee without any questions!</p>
          </ContentWrapper>
      </Container>
    </StyledSection>
  </>
)

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

const ImageWrapper = styled.div`
    margin-bottom:25px;
    text-align:center;
`
const ContentWrapper = styled.div`
    text-align:center;
`

const StyledSection = styled.section`
    padding:100px 0;
`

MoneyBackSection.propTypes = {
  
}

MoneyBackSection.defaultProps = {
  
}

export default MoneyBackSection