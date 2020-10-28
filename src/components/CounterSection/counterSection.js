import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

import AnimeUp from "../Animation/AnimeUp"


const CounterSection = () => (
  <>
    <CounterSectionWrapper>
        <Container>
            <CounterRow >
                <div className="col-lg-6 sm-padding">
                    <SectionHeading>
                        <h4 className="sub-heading">DO MORE WITH EMAUS</h4>
                        <h2>Over 1200+ completed <br />projects &amp; still counting.</h2>
                        <p>Use Emaus for free trial without the high costs. For the <br />big companies we offer premium features.</p>
                        <AnimeUp>
                            <CounterContent >
                                <div className="col-md-4 col-sm-6 wow fadeInUp padding-15">
                                    <div className="counter-item">
                                        <i className="ti-face-smile"></i>
                                        <h2>345</h2>
                                        <h3>Happy Clients</h3>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 wow fadeInUp padding-15" data-wow-delay="200ms">
                                    <div className="counter-item">
                                        <i className="ti-layers-alt"></i>
                                        <h2>1830</h2>
                                        <h3>Project Done</h3>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 wow fadeInUp padding-15" data-wow-delay="300ms">
                                    <div className="counter-item">
                                        <i className="ti-cup"></i>
                                        <h2>955</h2>
                                        <h3>Total Awards</h3>
                                    </div>
                                </div>
                            </CounterContent>
                        </AnimeUp>
                        
                    </SectionHeading>
                </div>
                <div className="col-lg-6 sm-padding wow fadeInUp">
                    <AnimeUp>
                        <div className="counter-img">
                            <img src="https://via.placeholder.com/860x550.png?text=SaasX" alt="saas" />
                        </div>
                    </AnimeUp>
                </div>
            </CounterRow>
        </Container>
    </CounterSectionWrapper>
  </>
)

const CounterSectionWrapper = styled.section`
    border-bottom: 1px solid #e5e5e5;
    padding: 100px 0;
    background-color: #f9fafa;
    box-sizing: border-box;
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

const CounterRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

const SectionHeading = styled.div`
    .sub-heading {
        display: inline-block;
        text-transform: uppercase;
        font-size: 12px;
        color: #fa071c;
        font-weight: 600;
        letter-spacing: 0;
        font-family: "Work Sans",sans-serif;
        position: relative;
        margin-bottom: 10px;
        z-index: 1;
    }
    h2{
        margin-bottom: 20px;
    }
    p{
        margin-bottom: 20px;
    }
`

const CounterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    i {
        font-size: 40px;
        color: #007bff;
        margin-bottom: 15px;
        display: block;
    }
    h2 {
        font-size: 28px;
        margin-bottom: 0;
    }
    h3{
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0;
        font-family: "Work Sans",sans-s
    }
    p {
        margin-bottom: 0;
    }
`

CounterSection.propTypes = {
  
}

CounterSection.defaultProps = {
  
}

export default CounterSection