
import React from "react"
import Collapse from "rc-collapse"
import styled from "styled-components"
import "rc-collapse/assets/index.css"
import motion from '../../../utils/motionUtil';

const collapseData = [
  {
    position:"Senior Analyst, Data Analytics",
    city:"San Francisco ",
    workDescription:"Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.",
  },
  {
    position:"Senior Front-end Engineer",
    city:"Remotely",
    workDescription:"Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.",
  },
  {
    position:"Lead Product Designer",
    city:"New York City",
    workDescription:"Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.",
  },
  {
    position:"Lead Product Designer",
    city:"New York City",
    workDescription:"Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.",
  },
  {
    position:"Online Advertising Manager",
    city:"Toronto,Canada",
    workDescription:"Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.",
  }
]
var Panel = Collapse.Panel

const CareerComponent = (props) => {
    console.log(props.data)
    return (
      <WrapperSection>
        <BlockHeader>Block 1</BlockHeader>

        <SectionBackground>
            <Container>
                <SubTitle>{ props.data.careerSubhead } </SubTitle>
                <SectionTitle> { props.data.careerTitle } </SectionTitle>
                <SectionInfo> { props.data.careerDescritption }</SectionInfo>
                <SectionSlider>
                    <Collapse 
                      accordion={true}
                      openMotion={motion}
                    >
                        {
                            props.data.saasCareerItem.map((panel,index) => {
                              return (
                                  <Panel 
                                    header={
                                      <>
                                        
                                        <div className="item-header-content">
                                          <PanelPostition>
                                            {panel.position} 
                                          </PanelPostition>
                                          <PanelPlace>
                                            {panel.city} 
                                            <i class="fas fa-map-marker-alt"></i>
                                          </PanelPlace>
                                        </div>
                                        
                                      </>
                                    }
                                    headerClass="header-panel"
                                  >
                                    <PanelContent>
                                      <PanelText>
                                        {panel.workDescription.workDescription}
                                      </PanelText>
                                      <PanelCta>
                                        <span>
                                          Apply now
                                        </span>
                                      </PanelCta>
                                    </PanelContent>
                                      
                                  </Panel>
                              )
                            })
                        }
                    </Collapse>
                </SectionSlider>
            </Container>
        </SectionBackground>
      </WrapperSection>
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

const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    margin-bottom:80px;
    text-align:center;
    font-family:Dosis;
    font-weight: 500;
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
    background-color: #fafbfb;
    margin: 30px 20px 100px;
    @media(max-width:768px) {
      padding-top: 5rem;
      padding-bottom: 5rem;
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



const WrapperSection = styled.div`
    margin-top:120px;
`

const SubTitle = styled.span`
    display: block;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    margin-bottom: 1.5rem;
    word-spacing: 2px;
    color: rgba(153,153,153,0.6);
    text-align:center;
    margin:0 auto 24px;
    font-family:Open Sans;
`

const SectionInfo = styled.p`
    font-size: 1.125rem;
    font-size:18px;
    text-align:center;
    font-family:Open Sans;
    font-weight: 300;
    margin-bottom:1rem;
`

const SectionSlider = styled.div`
    margin-top:70px;
    box-shadow: 0 0 26px rgba(0,0,0,0.06);
    border: 1px solid #f1f2f3;
    .header-panel {
      padding:20px !important;
      display:flex !important;
      background-color: #f9fafb !important;
      border:none !important;
      outline:none !important;
    }
    .item-header-content {
      padding:0 20px;
      width:100%;
      display:flex;
      justify-content:space-between;
    }
`

const PanelContent = styled.div`
    padding:20px 4px;
`

const PanelCta = styled.a`
    cursor:pointer;
    margin:0 auto;
    text-align:center;
    display:block;
    margin:32px auto 0;
    span {
      padding:10px 32px 9px;
      background-color: #50a1ff;
      color:#ffffff;
      font-size: 12px;
      letter-spacing: 1.7px;
      text-transform: uppercase;
      border-radius: 2px;
      font-family:Open Sans;
      font-weight:600;
      transition:all 0.2s;
      :hover {
        box-shadow: 1px 1px 15px 0px rgba(80,161,255,0.7);
      }
    }
    @media(max-width:576px) {
      padding-top:16px;
    }
`

const PanelText = styled.p`
    margin-bottom: 1rem;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    font-family:Open Sans;
`

const PanelPostition = styled.span`
    font-family:Dosis;
    font-weight: 500;
    color: #323d47;
    letter-spacing: 0.75px;
    font-size: 1.05469rem;
    @media(max-width:576px) {
      font-size: 15px;
    }
`

const PanelPlace = styled.h5`
    margin-bottom:0;
    color: #bfc5ca !important;
    font-size:15px;
    font-weight:600;
    font-family:Dosis;
    i {
      margin-left: .5rem !important;
      color: #bfc5ca !important;
    }
    @media(max-width:576px) {
      display:none;
    }
`

CareerComponent.propTypes = {
  
}

CareerComponent.defaultProps = {
  
}

export default CareerComponent
