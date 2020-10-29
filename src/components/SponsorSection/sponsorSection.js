import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"

import styled from "styled-components"

const SponsorSection = () => {
    const params = {
        spaceBetween: 10,
        initialSlide: 0,
        speed:2000,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 3,  
            },
            767: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 5,
            },
        },
    }
  return (
  <>
     <SponsorSectionWrapper>
        <Container>
            
            <Swiper  {...params}>
                <SponsorItem>
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </SponsorItem>
                <SponsorItem>
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </SponsorItem>
                <SponsorItem>
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </SponsorItem>
                <SponsorItem>
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </SponsorItem>
                <SponsorItem>
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </SponsorItem>
                <SponsorItem>
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </SponsorItem>
                <SponsorItem>
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </SponsorItem>
                <SponsorItem>
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor"/>
                </SponsorItem>
            </Swiper>
            
        </Container>
    </SponsorSectionWrapper>
  </>
  )
}

const SponsorSectionWrapper = styled.div`
    padding:64px 0;
    background-color: #f9fafa;
    z-index: 1;
    
`

const SponsorItem = styled.div`
    
    img {
        opacity: 1;
        cursor: pointer;
        :hover {
            opacity:0.9;
        }
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

SponsorSection.propTypes = {
  
}

SponsorSection.defaultProps = {
  
}

export default SponsorSection