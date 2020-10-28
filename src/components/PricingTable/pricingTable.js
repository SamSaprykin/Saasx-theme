import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"
import PricingCard from "../PricingCard/pricingCard"

const PricingTable = () => (
  <>
    <PricingTableWrapper>
        <Container>
            <SectionHeading>
                <span>Smart Contacts</span>
                <h2>Best Results &amp; Reliability</h2>
                <p>Choose a suitable package for your website and <br />join innovative minds</p>
            </SectionHeading>
            <PricingCardsWrapper>
                <PricingCard />
                <PricingCard /> 
                <PricingCard />
            </PricingCardsWrapper>
        </Container>
    </PricingTableWrapper>
  </>
)

const PricingTableWrapper = styled.section`
    border-bottom: 1px solid #e5e5e5;
    background-color: #f9fafa;
    padding: 100px 0;
`

const PricingCardsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

const SectionHeading = styled.div`
    margin-bottom:40px;
    text-align:center;
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

PricingTable.propTypes = {
  
}

PricingTable.defaultProps = {
  
}

export default PricingTable