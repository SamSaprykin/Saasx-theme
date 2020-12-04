import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const imageLogo = "/logo-dark.png"

const Map = ReactMapboxGl({
    
    accessToken:
      'pk.eyJ1Ijoic2FtZWxhcGNlIiwiYSI6ImNrZ3J2dWJqaTA1dGgyc3BwbWFrc2xrd2kifQ.5DY93FBhruYtqYd82DTiVA',
    scrollZoom: false
});

const ContactComponents4 = () => {
    
    return (
      <>
        <BlockHeader>Block 4</BlockHeader>

        <SectionBackground>
            <Container>
                <SectionTitle>Send us a message</SectionTitle>
                <StyledRow>
                    <StyledForm className="col-md-6">
                        <FormRow>
                            <FormGroup className="col-md-12">
                                <StyledInput type="text" id="name" name="name"  placeholder="Your Name" required />
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <StyledInput type="text" id="name" name="name"  placeholder="Your Email Adress" required />
                            </FormGroup>
                            <FormGroup className="col-md-12">
                            <StyledTextArea id="message" name="message" cols="30" rows="5"  placeholder="Your Message" required></StyledTextArea>
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <DefaultButton id="submit"  type="submit">Submit Inquiry</DefaultButton>
                            </FormGroup>
                        </FormRow>
                   </StyledForm>
                   <div className="col-md-6">
                        <Map
                            style="mapbox://styles/mapbox/streets-v9"
                            containerStyle={{
                                height: '100%',
                                width: 'auto'
                            }}
                        >
                            <Marker
                                coordinates={[-0.2416815, 51.5285582]}
                                anchor="bottom">
                                <img src={imageLogo}/>
                            </Marker>
                        </Map>
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
    padding-top: 2rem;
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
    margin-right: 0;
    margin-left: 0;
`
const FormGroup  = styled.div`
    padding-right: 5px;
    padding-left: 5px;
    font-weight: 300;
    margin-bottom:16px;
    text-align:center;
`
const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    margin-bottom:80px;
    text-align:center;
    font-family:Dosis;
    font-weight: 500;
    font-size:33.75px;
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
    padding:2rem;
    margin:0 auto;
    background-color: #fafbfb;
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



ContactComponents4.propTypes = {
  
}

ContactComponents4.defaultProps = {
  
}

export default ContactComponents4