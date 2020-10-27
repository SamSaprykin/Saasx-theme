import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./contactForm.css"

const ContactForm = () => (
  <>
    <div className="col-md-6 padding-15">
        <div className="contact-form">
            <form action="contact.php" method="post" id="ajax_form" className="form-horizontal">
                <div className="form-group colum-row row">
                    <div className="col-sm-6">
                        <input type="text" id="name" name="name" className="form-control" placeholder="Name" required />
                    </div>
                    <div class="col-sm-6">
                        <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
                    </div>
                </div>
                <div className="form-group row">
                    <div class="col-md-12">
                        <textarea id="message" name="message" cols="30" rows="5" className="form-control message" placeholder="Message" required></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <div class="col-md-12">
                        <button id="submit" className="default-btn" type="submit">Send Message</button>
                    </div>
                </div>
                <div id="form-messages" className="alert" role="alert"></div>
            </form>
        </div>
    </div>
  </>
)

ContactForm.propTypes = {
  
}

ContactForm.defaultProps = {
  
}

export default ContactForm