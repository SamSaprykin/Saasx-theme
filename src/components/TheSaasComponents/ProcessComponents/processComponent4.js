import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const processData = {
    title:"The Work Process",
    description:"We are so proud of our product. It's really easy to create a landing page for your product.",
    steps: [
        {
            icon:"far fa-file-alt",
            title:"Step one",
            description:"Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.",
        },
        {
            icon:"fas fa-bullhorn",
            title:"Step two",
            description:"Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.",
        },
        {
            icon:"fas fa-code",
            title:"Step three",
            description:"Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.",
        },
        {
            icon:"far fa-comments",
            title:"Step four",
            description:"Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.",
        },
        {
            icon:"fas fa-cogs",
            title:"Step five",
            description:"Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.",
        },
        {
            icon:"far fa-handshake",
            title:"Step six",
            description:"Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.",
        },
    ]
}


const ProcessComponent4 = () => {
    
    return (
      <>
        <BlockHeader>Block 4</BlockHeader>
        <SectionBackground>
            <Container>
                <HeaderSection>
                    <TitleSection>
                        {processData.title}
                    </TitleSection>
                    <DescriptionSection>
                        {processData.description}
                    </DescriptionSection>
                </HeaderSection>
                <StyledRow>
                    {
                        processData.steps.map((item,index) => {
                            return (
                                <ItemSteps className="col-md-6 col-xl-4" key={index}>
                                    <MediaComponent>
                                        <IconBox className={"icon-" +index}>
                                            <i className={item.icon}></i>
                                        </IconBox>
                                    </MediaComponent>
                                    <MediaBody>
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </MediaBody>
                                </ItemSteps>
                            )
                        })
                    }
                </StyledRow>
            </Container>
        </SectionBackground>
      </>
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

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding-top: 7rem; 
    padding-bottom: 7rem;
`

const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    text-align:center;
    align-items:center;
    flex-direction:column;
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
    hr {
        border-top: 1px solid rgba(0,0,0,0.1);
        border-top-color: rgba(117,117,117,0.09);
        width: 50px;
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
    }
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`


const HeaderSection = styled.div`
    text-align: center;
    max-width: 70%;
    margin: 0 auto 70px;
`

const TitleSection = styled.h4`
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 2.10938rem;
    margin-bottom: .5rem;
    font-family:Dosis;
    line-height: 1.5;
    margin-bottom:50px;
    font-weight:400;
`

const DescriptionSection = styled.p`
    margin-bottom: 1rem;
    font-family:Open Sans;
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
`

const ItemSteps = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    display:flex;
`

const MediaComponent = styled.div`
    display: flex;
    align-items: flex-start;
    .icon-0 {
        color:#50a1ff !important;
        
    }
    .icon-1 {
        color: #ff4954 !important;
        background-color: #fceeef !important;
    }
    .icon-2 {
        background-color: #f2eefc !important;
        color: #926dde !important;
    }
    .icon-3 {
        background-color: #fcf8ee !important;
        color: #ffba00 !important;
    }
    .icon-4 {
        background-color: #f0f4f7 !important;
        color: #868e96 !important;
    }
    .icon-5 {
        background-color: #eefcf0 !important;
        color: #3cd458 !important;
    }
`

const IconBox = styled.span`
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-size: 1.25rem;
    background-color: #eef4fc !important;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10rem;
    margin-right: 1.5rem !important;
`

const MediaBody = styled.div`
    flex: 1;
    text-align: left;
    h5 {
        letter-spacing: 0.75px;
        font-weight: 500;
        color: #323d47;
        font-size: 1.05469rem;
        margin-bottom: .5rem;
        font-family:Dosis;
    }
    p {
        font-size: .9375rem;
        font-weight: 300;
        line-height: 1.9;
        color: #757575;
        text-align: left;
        margin-bottom: 1rem;
        font-family:Open Sans;
    }
`


ProcessComponent4.propTypes = {
  
}

ProcessComponent4.defaultProps = {
  
}

export default ProcessComponent4