import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const ContactInformation = () => (
  <>
    <div class="col-md-6 padding-15">
        <ContactInfo>
            <h2>Get in touch with us & <br />send us message today!</h2>
            <p>Arkit is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design process that values everyone’s input.</p>
            <h3>198 West 21th Street, Suite 721 <br />New York, NY 10010</h3>
            <h4><span>Email:</span> Dynamiclayers.Net <br /> <span>Phone:</span> +88 (0) 101 0000 000 <br /> <span>Fax:</span> +88 (0) 202 0000 001</h4>
        </ContactInfo>
    </div>
  </>
)

const ContactInfo = styled.div`
  h2 {
    @media(max-width:756px) {
      line-height: 28px;
    }
  }
  h3{
    line-height: 28px;
    font-weight: 600;
    
  }
  h4{
    font-size: 15px;
    line-height: 28px;
    font-weight: 600;
  }
  span{
    text-transform: uppercase;
    margin-right: 5px;
    font-weight: 600;
  }
`

ContactInformation.propTypes = {
  
}

ContactInformation.defaultProps = {
  
}

export default ContactInformation