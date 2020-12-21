import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const ContactComponents2 = () => {
    
    return (
      <>
        <BlockHeader>Block 2</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                   <div className="col-md-6">
                    <StyledForm className="col-12 col-lg-12">
                        <FormGroup className="col-md-12">
                            <StyledInput type="text" id="name" name="name"  placeholder="Your Name" required />
                        </FormGroup>
                        <FormGroup className="col-md-12">
                            <StyledInput type="text" id="name" name="name"  placeholder="Your Email Adress" required />
                        </FormGroup>
                        <FormGroup className="col-md-12">
                        <StyledTextArea id="message" name="message" cols="30" rows="5"  placeholder="Message" required></StyledTextArea>
                        </FormGroup>
                        <FormGroup className="col-md-12">
                            <DefaultButton id="submit"  type="submit">Send Inquiry</DefaultButton>
                        </FormGroup>
                    </StyledForm>
                   </div>
                   <div className="col-md-5 ml-auto">
                       <FormInfo>
                            <TextInfo>
                                Give us a call or stop by our door anytime, we try to answer all enquiries within 24 hours on business days.
                            </TextInfo>
                            <TextInfo>
                                We are open from 9am — 5pm week days.
                            </TextInfo>
                            <Adress>
                                652 Main Road, Apt 12
                                New York, USA 10033
                            </Adress>
                            <WrapperContactInfo>
                                <LighterInfo>E:</LighterInfo><p>info@domain.com</p>
                            </WrapperContactInfo>
                            <WrapperContactInfo>
                                <LighterInfo>P:</LighterInfo><p>+1 (123) 456-7890</p>
                            </WrapperContactInfo>
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
    text-align:center;
    @media(max-width:768px) {
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
    @media(max-width:768px) {
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
    margin:0 auto;
    width:100%;
    :hover{
        color: #fff;
        box-shadow: 1px 1px 15px 0px rgba(80,161,255,0.7);
    }
`

const FormInfo = styled.div`
    padding:1.5rem;
    background-color: #fafbfb;
    @media(max-width:768px) {
        margin-top:16px;
    }
`

const TextInfo = styled.p`
    font-family: Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    @media(max-width:768px) {
        font-size:13.1px;
    }
`

const Adress = styled.span`
    margin-top:60px;
    display:block;
    font-size: 1.125rem;
    font-weight: 300;
    font-family:Open Sans;
    max-width:200px;
    line-height: 1.9;
    color: #757575;
    margin-bottom:16px;
    @media(max-width:768px) {
        margin-top:32px;
        font-size:16px;
    }
`
const WrapperContactInfo = styled.div`
    p {
        display:inline-block;
        font-size: .87891rem !important;
        font-weight: 300;
        line-height: 1.9;
        color: #757575;
        font-family:Open Sans;
        margin-bottom:0;
    }
`
const LighterInfo = styled.span`
    color: #bfc5ca !important;
    width: 5% !important;
    margin-right:8px;
    font-family:Open Sans;
    font-weight: 300;
`

ContactComponents2.propTypes = {
  
}

ContactComponents2.defaultProps = {
  
}

export default ContactComponents2