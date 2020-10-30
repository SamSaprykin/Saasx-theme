import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const Footer = () => (
  <>
  <FooterWrapper className="widget-section padding">
        <Container>
            <FooterRow>
                <div className="col-lg-3 col-sm-6 sm-padding">
                    <FooterContent>
                        <a href="#"><img src="/logo-light.png" alt="brand" /></a>
                        <p>Building your own home is about desire, fantasy. But it’s achievable anyone can do it.</p>
                    </FooterContent>
                </div>
                <div className="col-lg-2 col-sm-6 sm-padding">
                    <FooterContent>
                        <h4>Company</h4>
                        <ul className="widget-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Clients Reviews</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </FooterContent>
                </div>
                <div className="col-lg-3 col-sm-6 sm-padding">
                    <FooterContent>
                        <h4>Headquaters</h4>
                        <p>962 Fifth Avenue, 3rd Floor New York, NY10022</p>
                        <span>Hello@TeamXcel.net</span>
                        <span>(+123) 456 789 101</span>
                    </FooterContent>
                </div>
                <div className="col-lg-4 col-sm-6 sm-padding">
                    <FooterContent>
                        <h4>Newslatter Subscription</h4>
                        <p>Subscribe and get 10% off from our <br />architecture company.</p>
                        <div className="subscribe-box clearfix">
                            <div className="subscribe-form-wrap">
                                <SubscribeForm action="#" >
                                    <input type="email" name="email" id="subs-email" className="form-input" placeholder="Enter Your Email Address..." />
                                    <button type="submit" className="submit-btn">Subscribe</button>
                                    <div id="subscribe-result">
                                        <p className="subscription-success"></p>
                                        <p className="subscription-error"></p>
                                    </div>
                                </SubscribeForm>
                            </div>
                        </div>
                    </FooterContent>
                </div>
            </FooterRow>
        </Container>
    </FooterWrapper>
        
    <FooterSection>
        <Container>
            <p>&copy; 2019 Saasx Powered by TeamXcel</p>
        </Container>
    </FooterSection>
  </>
)

const FooterWrapper = styled.section`
    background-color: #212529;
    border-bottom: 1px solid #444;
    padding:100px 0;
    @media (max-width: 767px) {
        padding: 60px 0;
    }
`

const FooterSection = styled.footer`
    background-color: #212529;
    display: block;
    color: #fff;
    text-align: center;
    padding: 25px 0;
    p {
        font-size: 12px;
        color: #ababc7;
        margin: 0;
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
const FooterRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`
const FooterContent = styled.div`
    img {
        margin-bottom: 20px !important;
    }
    h4 {
        color: #fff;
        font-weight: 600;
    }
    p {
        color: #ddd;
    }
    span {
        display: block;
        color: #fff;
    }
    .widget-links {
        a {
            color: #fff;
            line-height: 1.9;
            :hover{
                color: #2550de;
            }
            
        }
    }
`

const SubscribeForm = styled.form`
    position: relative;
    input {
        background-color: #212529;
        border: 1px solid #444;
        width: 100%;
        height: 50px;
        padding: 10px;
        padding-right: 140px;
        border-radius: 2px;
    }
    button {
        background-color: #2550de;
        font-family: "Work Sans",sans-serif;
        text-transform: uppercase;
        color: #fff;
        font-size: 12px;
        border-radius: 2px;
        line-height: 50px;
        font-weight: 600;
        display: inline-block;
        letter-spacing: 0.5px;
        padding: 0 30px;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        border: none;
    }
`

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer