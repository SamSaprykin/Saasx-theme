import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"

import styled from "styled-components"

const TestimonialSection = () => {
    const params = {
        spaceBetween: 10,
        initialSlide: 0,
        speed:2000,
        loop: true,
        breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 40
            },
            767: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
        },
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
    <TestimonialSliderWrapper>
        <div className="container">
            <div className="section-heading mb-40 text-center">
                <h4 className="sub-heading">Testimonial</h4>
                <h2>Checkout what people <br/>says about us!</h2>
            </div>
            <div id="testimonial-carousel" className="testimonial-carousel">
            <Swiper  {...params}>
                <TestimonialItem>
                    <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and built by the very best!"</p>
                    <h3>Kyle Frederick<span>Developer</span></h3>
                    <img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="testi" />   
                </TestimonialItem>
                <TestimonialItem>
                    <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and built by the very best!"</p>
                    <h3>Jose Carpio<span>Developer</span></h3>
                    <img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="testi" />   
                </TestimonialItem>
                <TestimonialItem >
                    <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and built by the very best!"</p>
                    <h3>Malamio Rose<span>Developer</span></h3>
                    <img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="testi" />   
                </TestimonialItem>
                <TestimonialItem >
                    <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and built by the very best!"</p>
                    <h3>Abdullah Riju<span>Developer</span></h3>
                    <img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="testi" />   
                </TestimonialItem>
            </Swiper>
            </div>
        </div>
    </TestimonialSliderWrapper>
  </>
  )
}

const TestimonialSliderWrapper = styled.section`
    padding:100px 0;
    @media (max-width: 767px) {
        padding: 60px 0;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
        
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        margin-bottom: 64px !important;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-pagination-bullet {
        border-radius: 0 !important;
        width: 10px !important;
        height: 10px !important;
        background-color: #555 !important;
    }

    .swiper-pagination-bullet-active {
        background-color: #2550de !important;
    }
    h2 {
        @media (max-width: 767px)
         {
            font-size: 22px;
            line-height: 36px;
        }
    }
`

const TestimonialItem = styled.div`
    text-align: center;
    padding: 40px 20px;
    background-color: #f9fafa !important;
    img{
        width: 80px;
        height: 80px;
        line-height: 80px;
        border-radius: 50%;
        margin: 0 auto;
    }
    span{
        text-transform: uppercase;
        font-size: 12px;
        color: #263a4f;
        font-weight: 600;
        letter-spacing: 0;
        font-family: "Work Sans",sans-serif;
        display: block;
        margin-bottom: 20px;
    }
`

TestimonialSection.propTypes = {
  
}

TestimonialSection.defaultProps = {
  
}

export default TestimonialSection