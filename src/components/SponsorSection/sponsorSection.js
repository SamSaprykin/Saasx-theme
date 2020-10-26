import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./sponsorSection.css"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"

const SponsorSection = () => {
    const params = {
        slidesPerView: 5,
        spaceBetween: 10,
        initialSlide: 0,
        speed:2000,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    }
  return (
  <>
     <div className="sponsor-section bg-grey">
        <div className="container">
            <div className="sponsor-carousel">
            <Swiper  {...params}>
                <div className="sponsor-item">
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </div>
                <div className="sponsor-item">
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </div>
                <div className="sponsor-item">
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </div>
                <div className="sponsor-item">
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </div>
                <div className="sponsor-item">
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </div>
                <div className="sponsor-item">
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </div>
                <div className="sponsor-item">
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor" />
                </div>
                <div className="sponsor-item">
                    <img src="https://via.placeholder.com/180x80.png?text=SaasX" alt="sponsor"/>
                </div>
            </Swiper>
            </div>
        </div>
    </div>
  </>
  )
}

SponsorSection.propTypes = {
  
}

SponsorSection.defaultProps = {
  
}

export default SponsorSection