import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

import AnimeUp from "../Animation/AnimeUp"

const CtaSection = () => (
  <>
    <CtaSectionWrapper className="cta-section padding">
        <Container>
            <AnimeUp>
              <div className="cta-content">
                  <h2>Manage any Projects with SaasX</h2>
                  <p>We combine practice of managing and analyzing project management to its full performance <br />and maximize its effectiveness and stay to of everything</p>
                  <Link to="/" className="default-btn">Start Free Trial</Link>
              </div>
            </AnimeUp>
        </Container>
    </CtaSectionWrapper>
  </>
)

const CtaSectionWrapper = styled.section`
    background-image: url(/call-to-action-bg.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 100px 0;
    @media (max-width: 767px) {
        padding: 60px 0;
    }
    a {
        color: #263a4f;
        background-color: #fff;
        :hover {
            background-color: #fff;
            color: #263a4f;
        }
    }
    .cta-content{
        margin-top: 105px;
        text-align:center;
        h2 {
            color: #fff;
        }
        p {
            color: #ddd;
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

CtaSection.propTypes = {
  
}

CtaSection.defaultProps = {
  
}

export default CtaSection