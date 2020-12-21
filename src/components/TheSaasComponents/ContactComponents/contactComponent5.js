import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"



const ContactComponents5 = () => {
    
    return (
      <>
        <BlockHeader>Block 5</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-md-6">
                        <StyledForm className="col-11 col-md-6 mx-auto mx-md-0">
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
                                <TitleInfo>
                                    Address
                                </TitleInfo>
                                <TextInfo>
                                    1134 Main Street
                                    Suit 124
                                    Seattle, WA, 98101
                                </TextInfo>
                                <TitleInfo>
                                    Phone
                                </TitleInfo>
                                <TextInfo>
                                    <p>+1 987 123 6548</p>
                                </TextInfo>
                                <TitleInfo>
                                    Email
                                </TitleInfo>
                                <TextInfo>
                                    hello@thetheme.io
                                </TextInfo>
                                
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
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
    background: url(/background10.jpg);
    background-size:100%;
    margin: 30px 20px 100px;
    ::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #191919;
        border-radius: inherit;
        opacity: .8;
    }
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
    width:100%;
    margin-bottom:-16px;
    :hover{
        color: #fff;
        box-shadow: 1px 1px 15px 0px rgba(80,161,255,0.7);
    }
`

const FormInfo = styled.div`
    padding-top: 1rem;
    @media(max-width:576px) {
        padding: 2rem 16px 0;
    }
`

const TitleInfo = styled.p`
    color: #fff;
    letter-spacing: 0.5px;
    font-weight: 500;
    font-size: 1.05469rem;
    margin-bottom:8px;
    font-family:Dosis;
    @media(max-width:576px) {
        font-size: 14.8px;
    }
`

const TextInfo = styled.p`
    font-family: Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #fff;
    text-align: left;
    max-width:130px;
    margin-bottom:40px;
    @media(max-width:576px) {
        font-size: 13.1px;
    }
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
    background-color: #fff !important;
    border-radius: .25rem !important;
    padding: 2rem !important;
    max-width:480px;
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



ContactComponents5.propTypes = {
  
}

ContactComponents5.defaultProps = {
  
}

export default ContactComponents5