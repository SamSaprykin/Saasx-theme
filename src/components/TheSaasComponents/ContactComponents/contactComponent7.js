import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const ContactComponents7 = () => {
    
    return (
      <>
        <BlockHeader>Block 7</BlockHeader>
        <SectionBackground>
            <Container>
            

                <StyledRow>
                    <div className="col-md-6">
                        <SectionTitle>Contact Us</SectionTitle>
                        <StyledForm className="col-11 col-lg-12">
                            <StyledRow>
                                <FormGroup className="col-md-6">
                                    <StyledInput type="text" id="name" name="name"  placeholder="Name" required />
                                </FormGroup>
                                <FormGroup className="col-md-6">
                                    <StyledInput type="text" id="email" name="email"  placeholder="Email" required />
                                </FormGroup>
                            </StyledRow>
                            <StyledRow>
                                <FormGroup className="col-md-12">
                                    <StyledTextArea id="message" name="message" cols="30" rows="5"  placeholder="Message" required></StyledTextArea>
                                </FormGroup>
                                <FormGroup className="col-md-12">
                                    <DefaultButton id="submit"  type="submit">Send Message</DefaultButton>
                                </FormGroup>
                            </StyledRow>
                        
                        </StyledForm>
                    </div>
                    <div className="col-md-5 ml-auto">
                        <FormInfo>
                                <SectionTitle>Find Us</SectionTitle>
                                <TextInfo>
                                    2651 Main Street, Suit 124
                                    Seattle, WA, 98101
                                </TextInfo>
                                <MobilesWrapper>
                                    <p>+1 (321) 654 9870</p>
                                    <p>+1 (987) 123 6548</p>
                                </MobilesWrapper>
                                <EmailInfo>
                                    hello@thetheme.io
                                </EmailInfo>
                                <SocialWrapper>
                                    <h5>Follow Us</h5>
                                    <IconsWrapper>
                                        <a className="social-twitter" href="#"><i class="fab fa-twitter"></i></a>
                                        <a className="social-facebook" href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a className="social-instagram" href="#"><i class="fab fa-instagram"></i></a>
                                        <a className="social-dribbble" href="#"><i class="fab fa-dribbble"></i></a>
                                    </IconsWrapper>
                                </SocialWrapper>
                        </FormInfo>
                    </div>
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

const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    margin-bottom:28px;
    font-family:Dosis;
    font-weight: 500;
    font-size: 1.75781rem;
    @media(max-width:576px) {
        font-size: 24px;
    }
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
    margin: 30px 20px 100px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    @media(max-width:768px) {
        padding-top: 5rem;
        padding-bottom: 5rem;
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




const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`


const FormGroup  = styled.div`
    padding-right: 5px;
    padding-left: 5px;
    font-weight: 300;
    margin-bottom:16px;
    @media(max-width:576px) {
        margin-bottom:0;
    }
`

const StyledInput = styled.input`
    height: calc(2.2em + .75rem + 2px);
    padding: .375rem 1rem;
    font-size: 1.0625rem;
    line-height: 2.2;
    border-radius: 2px;
    color: #999;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #eaeff4;
    width:100%;
    font-weight: 300;
    font-family:Open Sans;
    @media (max-width:756px){
        margin-bottom:16px;
        height:56px;
    }    
    :focus {
        border-color: #eaeff4;
        box-shadow: none;
        outline: none;
    }
`

const StyledForm = styled.form`
    margin:0 auto;
    border-radius: .25rem !important;
    padding:0;
    padding-left:12px;
    @media(max-width:576px) {
        padding:0;
    }
`



const StyledTextArea = styled.textarea`
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #eaeff4;
    border-radius: 0;
    padding: 6px 16px;
    box-shadow: none;
    font-weight: 300;
    font-family:Open Sans;
    font-size: 1.0625rem;
    :focus {
        border-color: #eaeff4;
        box-shadow: none;
        outline: none;
    }
    @media(max-width:576px) {
        margin-bottom:16px;
    }
`

const DefaultButton = styled.button`
    background-color: #50a1ff;
    border-color: #50a1ff;
    text-transform: uppercase;
    font-family: Open Sans;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
    line-height: 30px;
    font-weight: 600;
    display: inline-block;
    letter-spacing: 1.7px;
    padding: 7px 32px 6px;
    cursor:pointer;
    :hover{
        color: #fff;
        box-shadow: 1px 1px 15px 0px rgba(80,161,255,0.7);
    }
`

const FormInfo = styled.div`
    @media(max-width:576px) {
        text-align: center;
        margin-top:40px;
    }
`



const TextInfo = styled.p`
    font-family: Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    max-width:180px;
    @media(max-width:576px) {
        text-align: center;
        margin:12px auto;
    }
`


const MobilesWrapper = styled.div`
    margin-bottom: 1rem;
    p {
        font-family: Open Sans;
        font-size: .9375rem;
        font-weight: 300;
        line-height: 1.9;
        color: #757575;
        margin-bottom:0;
        @media(max-width:576px) {
            font-size: 13px;
        }
    }
`


const EmailInfo = styled.span`
    font-family: Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    margin-bottom: 1rem;
    display:block;
`



const SocialWrapper = styled.div`
    h5 {
        line-height: 1.9;
        color: #757575;
        font-family: Open Sans;
        font-size: .9375rem;
        font-weight: 500;
    }
`

const IconsWrapper = styled.div`
    display:flex;
    @media(max-width:576px) {
        justify-content:center;
    }
    a {
        margin-right: 1rem;
        font-size: 0.8125rem;
    }
    i {
        color: #757575;
        :hover {
            color:#50a1ff;
        }
    }
    
`

ContactComponents7.propTypes = {
  
}

ContactComponents7.defaultProps = {
  
}

export default ContactComponents7