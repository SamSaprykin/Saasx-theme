import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const ContactForm = () => (
  <>
    <div className="col-md-6 padding-15">
        <ContactFormWrapper>
            <StyledForm action="contact.php" method="post" id="ajax_form" >
                <div className="form-group colum-row row">
                    <div className="col-sm-6">
                        <StyledInput type="text" id="name" name="name"  placeholder="Name" required />
                    </div>
                    <div class="col-sm-6">
                        <StyledInput type="email" id="email" name="email"  placeholder="Email" required />
                    </div>
                </div>
                <div className="form-group row">
                    <div class="col-md-12">
                        <StyledTextArea id="message" name="message" cols="30" rows="5"  placeholder="Message" required></StyledTextArea>
                    </div>
                </div>
                <div className="form-group row">
                    <div class="col-md-12">
                        <DefaultButton id="submit"  type="submit">Send Message</DefaultButton>
                    </div>
                </div>
                <div id="form-messages" className="alert" role="alert"></div>
            </StyledForm>
        </ContactFormWrapper>
    </div>
  </>
)

const ContactFormWrapper = styled.div`
    margin-bottom: 15px;
`

const StyledForm = styled.form`
    margin:0;
    padding:0;
`

const StyledInput = styled.input`
    background-color: #fff;
    border-radius: 0;
    padding: 15px 10px;
    box-shadow: none;
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    :focus {
        border-color: #2550de;
        box-shadow: none;
        outline: none;
    }
`
const StyledTextArea = styled.textarea`
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0;
    padding: 15px 10px;
    box-shadow: none;
    :focus {
        border-color: #2550de;
        box-shadow: none;
        outline: none;
    }
`

const DefaultButton = styled.button`
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
    -webkit-box-shadow: 0 3px 10px rgba(71, 44, 173, 0.2);
    box-shadow: 0 3px 10px rgba(71, 44, 173, 0.2);
    cursor:pointer;
    :hover{
        background-color: #263a4f;
        color: #fff;
    }
`

ContactForm.propTypes = {
  
}

ContactForm.defaultProps = {
  
}

export default ContactForm