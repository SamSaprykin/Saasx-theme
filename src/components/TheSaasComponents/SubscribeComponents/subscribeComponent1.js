import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"



const SubscribeComponent1 = () => {
    
    return (
      <>
        <BlockHeader>Block 1</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow >
                    <TitleSection>
                        News and Updates
                    </TitleSection>
                    <DescriptionSection>
                        Subscribe to our newsletter and receive the latest news from TheThemeio.
                    </DescriptionSection>
                    <StyledForm>
                        <FormRow>
                            <div className="col-md-4 ml-auto mb-4 mb-md-0">
                                <InputGroup>
                                    <Prepand>
                                        <IconWrapper>
                                            <i className="fa fa-envelope" />
                                        </IconWrapper>
                                    </Prepand>
                                    <StyledInput placeholder="Email adress" />
                                </InputGroup>
                            </div>
                            <div className="col-md-2 mr-auto">
                                <StyledButton>subscribe</StyledButton>
                            </div>
                        </FormRow>
                    </StyledForm>
                    <SocialWrapper>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube" />
                        </a>
                    </SocialWrapper>
                </StyledRow>
            </Container>
        </SectionBackground>
      </>
    )
}



const BlockHeader = styled.h5`
    text-align: center;
    font-weight: 500;
    font-size: 0.8125em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family:Dosis;
    margin-block-start: 2.33em;
    ::after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 6px;
        margin-bottom: 2px;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        border-top: 3px solid #191919;
    }
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding-top: 7rem;
    padding-bottom: 7rem;
    background-image:url("/2.jpg");
    :before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #191919;
        border-radius: inherit;
        opacity: .7;
    }
`

const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    text-align:center;
    position:relative;
    z-index:100;
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
    .no-gutters {
        margin-bottom:32px;
        box-shadow: 0 0 15px rgba(0,0,0,0.06);
        border: 1px solid #f1f2f3;
        cursor:pointer;
    }
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    text-align:center;
    align-items:center;
    flex-direction:column;
`

const TitleSection = styled.h2`
    color: #fff;
    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 2.10938rem;
    line-height: 1.5;
    margin-bottom: 32px;
    font-family:Dosis;
`

const DescriptionSection = styled.p`
    color: rgba(255,255,255,0.85);
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.9;
    font-family:Open Sans;
    margin-bottom:60px;
`

const FormRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
    div {
        padding-right: 5px;
        padding-left: 5px;
    }
    margin-bottom:60px;
`

const StyledForm = styled.form`
    width:100%;
`
const InputGroup = styled.div`
    border-radius: 2px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    text-align: center !important;
    color: rgba(255,255,255,0.85) !important;
`

const IconWrapper = styled.span`  
    padding: .375rem 0 .375rem 1rem;
    font-size: 1.0625rem;
    line-height: 2.2;
    border-radius: 2px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const StyledInput = styled.input`
    border-left: 0;
    height: calc(2.2em + .75rem + 2px);
    background-color: rgba(255,255,255,0.2);
    font-weight: 400;
    color: rgba(255,255,255,0.8);
    outline:none;
    border:none;
    padding: .375rem 1rem .375rem 50px;
    font-size: 1.0625rem;
    line-height: 2.2;
    display: block;
    width: 100%;
`

const Prepand = styled.div`
    margin-left: 0;
    margin-right: 0;
    display: flex;
    position:absolute;
    left:0;
    height:100%;
`

const StyledButton = styled.button`
    height: 100%;
    padding: 7px 32px 6px;
    font-size: 12px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    border-radius: 2px;
    outline: none;
    transition: 0.15s linear;
    display: block;
    width: 100%;
    line-height: 2.2;
    color: #fff;
    background-color: #50a1ff;
    border-color: #50a1ff;
`

const SocialWrapper = styled.div`
    a {
        color: rgba(255,255,255,0.8) !important;
        background-color: rgba(255,255,255,0.1);
        display: inline-block;
        width: 32px;
        height: 32px;
        line-height: 32px;
        margin-right: 4px;
        margin-bottom: 4px;
        text-align: center;
        font-size: 1rem;
        border-radius: 3px;
        opacity: 0.8;
        :hover {
            background-color: rgba(255,255,255,0.);
        }
    }
`


SubscribeComponent1.propTypes = {
  
}

SubscribeComponent1.defaultProps = {
  
}

export default SubscribeComponent1