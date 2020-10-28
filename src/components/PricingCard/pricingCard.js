import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const PricingCard = () => (
  <>
    <div className="col-lg-4 col-sm-6 padding-15">
        <PricingBox>
            <PricingHead>
                <span>BEST CHOICE</span>
                <h3>$49<span>Yearly</span></h3>
                <h4>Premium Plan</h4>
                <p>An entry tool for those who started. Forever free.</p>
            </PricingHead>
            <PricinList className="pricing-list">
                <li><i className="fas fa-check"></i>1 User</li>
                <li><i className="fas fa-check"></i>Unlimited projects</li>
                <li><i className="fas fa-check"></i>Lifetime Updates</li>
                <li><i className="fas fa-check"></i>Premium Support</li>
            </PricinList>
            <div>
                <DefaultButton>Purchase Plan</DefaultButton>
            </div>
        </PricingBox>
    </div>    
  </>
)

const PricingBox = styled.div`
    background-color: #fff;
    padding: 40px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 50px 100px 0px rgba(61,1,4,0.1),0px -6px 0px 0px rgba(248,99,107,0.004);
    box-shadow: 0px 50px 100px 0px rgba(61,1,4,0.1),0px -6px 0px 0px rgba(248,99,107,0.004);
`

const PricingHead = styled.div`
    span {
        text-transform: uppercase;
        font-size: 12px;
        color: #ff3465;
        font-weight: 600;
        letter-spacing: 0;
        font-family: "Work Sans",sans-serif;
    }
    .pricing-price {
        font-weight: 600;
    }
    h3 {
        font-size: 55px;
        font-weight: 600;
    }
    h3 span{
        margin-left: 15px;
        font-weight: 600;
    }
`

const PricinList = styled.ul`
    margin-top: 15px;
    li {
        margin-bottom: 15px;
        i {
            color: #0abf53;
            font-size: 10px;
            margin-right: 10px;
        }
    }
`

const DefaultButton = styled(Link)`
    background-color: #2550de;
    text-transform: uppercase;
    font-family: "Work Sans",sans-serif;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
    line-height: 50px;
    font-weight: 600;
    display: inline-block;
    letter-spacing: 0.5px;
    padding: 0 30px;
    margin-top: 18px;
    -webkit-box-shadow: 0 3px 10px rgba(71, 44, 173, 0.2);
    box-shadow: 0 3px 10px rgba(71, 44, 173, 0.2);
    cursor:pointer;
    :hover{
        background-color: #263a4f;
        color: #fff;
    }
`

PricingCard.propTypes = {
  
}

PricingCard.defaultProps = {
  
}

export default PricingCard