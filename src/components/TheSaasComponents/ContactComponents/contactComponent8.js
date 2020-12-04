import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const cardsData = [
    {
        category:"News",
        image:"/blogCard1.jpg",
        text:"We relocated our office to a new designed garage",
        linkTo:"/",
    },
    {
        category:"Marketing",
        image:"/blogCard2.jpg",
        text:"Top 5 brilliant content marketing strategies",
        linkTo:"/",
    },
    {
        category:"Design",
        image:"/blogCard3.jpg",
        text:"Best practices for minimalist design with example",
        linkTo:"/",
    }
]

const ContactComponents8 = () => {
    
    return (
      <>
        <BlockHeader>Block 8</BlockHeader>

        <SectionBackground>
            <Container>
            <SectionInfo>CONTACT</SectionInfo>
            <SectionTitle>Let's Talk</SectionTitle>
            <SectionDescription>They original on mountains, drew the support time. The of to graduate into to is the to she.</SectionDescription>
                <StyledRow>
                    <StyledForm className="col-md-12">
                            <FormRow>
                                <FormGroup className="col-md-3">
                                    <StyledInput type="text" id="email" name="email"  placeholder="Email" required />
                                </FormGroup>
                                <FormGroup className="col-md-3">
                                    <StyledInput type="text" id="name" name="name"  placeholder="Name" required />
                                </FormGroup>
                                <FormGroup className="col-md-3">
                                    <StyledInput type="text" id="subject" name="subject"  placeholder="Subject" required />
                                </FormGroup>
                                <FormGroup className="col-md-3">
                                    <StyledInput type="text" id="company" name="company"  placeholder="Company name" required />
                                </FormGroup>
                                <FormGroup className="col-md-12">
                                <StyledTextArea id="message" name="message" cols="30" rows="5"  placeholder="Message" required></StyledTextArea>
                                </FormGroup>
                                <FormGroup className="col-md-12">
                                    <DefaultButton id="submit"  type="submit">Submit Inquiry</DefaultButton>
                                </FormGroup>
                            </FormRow>
                    </StyledForm>
                   
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
    margin-bottom:80px;
    text-align:center;
    font-family:Dosis;
    font-size: 3rem;
    font-weight: 200;
    line-height: 1.5;
`

const SectionDescription = styled.p`
    font-size: 1.125rem;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    font-weight: 300;
    text-align:center;
`

const SectionInfo = styled.span`
    display: block;
    text-align:center;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    word-spacing: 2px;
    color: rgba(153,153,153,0.6);
    margin:0 auto 1.5rem;
    font-family:Open Sans;
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
`

const StyledInput = styled.input`
    height: calc(2.2em + .75rem + 2px);
    padding: .375rem 1rem;
    font-size: 1.0625rem;
    line-height: 2.2;
    color: #999;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #eaeff4;
    width:100%;
    font-weight: 300;
    font-family:Open Sans;
    border-radius: 2px;
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
    padding:2rem;
    margin:0 auto;
    border-radius: .25rem !important;
`

const FormRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
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


ContactComponents8.propTypes = {
  
}

ContactComponents8.defaultProps = {
  
}

export default ContactComponents8