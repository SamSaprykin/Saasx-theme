import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"



const ContactComponents6 = () => {
    
    return (
      <>
        <BlockHeader>Block 6</BlockHeader>

        <SectionBackground>
            <Container>
            <SectionTitle>Poke Us</SectionTitle>

                <StyledRow>
                    
                        <StyledForm className="col-11 col-lg-12">
                            <FormGroup className="col-md-3">
                                <StyledInput type="text" id="name" name="name"  placeholder="Your Name" required />
                            </FormGroup>
                            <FormGroup className="col-md-3">
                                <StyledInput type="text" id="name" name="email"  placeholder="Email Adress" required />
                            </FormGroup>
                            <FormGroup className="col-md-3">
                                <StyledInput type="text" id="name" name="company"  placeholder="Company name" required />
                            </FormGroup>
                            <FormGroup className="col-md-3">
                                <DefaultButton id="submit"  type="submit">Send Message</DefaultButton>
                            </FormGroup>
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
    font-weight: 500;
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
    background-color: #fafbfb;
    margin: 30px 20px 100px;
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
`

const StyledInput = styled.input`
    height: calc(1.9em + .75rem + 2px);
    padding: 6px 12px;
    font-size: .9375rem;
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
    padding: 2rem !important;
    display:flex;
    justify-content:space-between;
`




const DefaultButton = styled.button`
    background-color: #50a1ff;
    border-color: #50a1ff;
    text-transform: uppercase;
    font-family: Open Sans;
    color: #fff;
    font-size: 11px;
    border-radius: 2px;
    line-height: 30px;
    font-weight: 600;
    display: inline-block;
    letter-spacing: 1.7px;
    padding: 6px 26px 6px;
    cursor:pointer;
    width:100%;

    :hover{
        color: #fff;
        box-shadow: 1px 1px 15px 0px rgba(80,161,255,0.7);
    }
`


ContactComponents6.propTypes = {
  
}

ContactComponents6.defaultProps = {
  
}

export default ContactComponents6