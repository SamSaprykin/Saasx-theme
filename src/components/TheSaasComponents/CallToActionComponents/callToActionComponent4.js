import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const ctaData = {
    title:"Try it for free",
    description:"Already using TheSaaS?",
}

const CtaComponent4 = () => {
    
    return (
      <>
        <BlockHeader>Block 4</BlockHeader>

        <SectionBackground>
            <Container>
            

                <StyledRow>
                   <div className="col-md-6">
                     <SectionTitle>{ctaData.title}</SectionTitle>
                     <SectionDescription>{ctaData.description} <a href="/">Sign in</a></SectionDescription>
                   </div>
                   <div className="col-md-auto ml-auto ">
                      <FormWrapper>
                          <StyledForm>
                            <FormGroup>
                                <StyledInput type="text" id="name" name="name"  placeholder="Email address" required />
                            </FormGroup>
                            <FormGroup>
                                <DefaultButton id="submit"  type="submit">Get Started</DefaultButton>
                            </FormGroup>
                          </StyledForm>
                      </FormWrapper>
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
    margin-bottom: .5rem;
    font-family:Dosis;
    font-weight: 500;
    font-size: 1.75781rem;
    @media (max-width: 576px) {
        text-align:center;
    }
`

const SectionDescription = styled.p`
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    a {
        color: #50a1ff;
    }
    @media (max-width: 576px) {
        text-align:center;
    }
`

const FormWrapper = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: right !important;
`

const StyledForm = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center !important;
`

const FormGroup  = styled.div`
    padding-right: 5px;
    padding-left: 5px;
    font-weight: 300;
    margin-bottom:16px;
    text-align:center;
`

const StyledInput = styled.input`
    height: calc(1.9em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: .9375rem;
    border-radius: 2px;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #eaeff4;
    width: 250px !important;
    margin-right: .5rem !important;
    margin-left: .5rem !important;
    font-weight: 300;
    font-family:Open Sans;
    line-height: 1.9;
    color: #999;
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
    :hover{
        color: #fff;
        box-shadow: 1px 1px 15px 0px rgba(80,161,255,0.7);
    }
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 3rem !important;
    padding-top:3rem !important;
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
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




CtaComponent4.propTypes = {
  
}

CtaComponent4.defaultProps = {
  
}

export default CtaComponent4