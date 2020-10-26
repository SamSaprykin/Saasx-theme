import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./testimonialSection.css"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"


const TestimonialSection = () => {
    const params = {
        slidesPerView: 3,
        spaceBetween: 10,
        initialSlide: 0,
        speed:2000,
        loop: true,
        autoplay: {
          delay: 1,
          disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
      }
  return (
  <>
    <section className="testimonial-section padding">
        <div className="container">
            <div className="section-heading mb-40 text-center">
                <h4 className="sub-heading">Testimonial</h4>
                <h2>Checkout what people <br/>says about us!</h2>
            </div>
            <div id="testimonial-carousel" className="testimonial-carousel owl-carousel">
            <Swiper  {...params}>
                <div className="testi-item">
                    <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and built by the very best!"</p>
                    <h3>Kyle Frederick<span>Developer</span></h3>
                    <img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="testi" />   
                </div>
                <div className="testi-item">
                    <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and built by the very best!"</p>
                    <h3>Jose Carpio<span>Developer</span></h3>
                    <img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="testi" />   
                </div>
                <div className="testi-item">
                    <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and built by the very best!"</p>
                    <h3>Malamio Rose<span>Developer</span></h3>
                    <img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="testi" />   
                </div>
                <div className="testi-item">
                    <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and built by the very best!"</p>
                    <h3>Abdullah Riju<span>Developer</span></h3>
                    <img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="testi" />   
                </div>
            </Swiper>
            </div>
        </div>
    </section>
  </>
  )
}

TestimonialSection.propTypes = {
  
}

TestimonialSection.defaultProps = {
  
}

export default TestimonialSection