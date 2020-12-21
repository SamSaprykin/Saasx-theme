import React, {useState} from "react"
import styled from "styled-components"
import ReactPlayer from 'react-player'

const dataCover = {
    title:"TheAdmin;",
    subhead:"Template of 2020",
    descritption:"Responsive, professional, and multipurpose admin template powered by Bootstrap 4.",
}

const CoverComponents6 = () => {
    const [playerPlaying, setPlayerPlaying] = useState(false)
    const clickPlaying = e => {
        setPlayerPlaying(!playerPlaying)
    }
    console.log(playerPlaying)
    return (
      <>
        <BlockHeader>Block 6</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-lg-5">
                        <CoverTitle>
                            {dataCover.title}
                        </CoverTitle>
                        <CoverSubhead>
                            {dataCover.subhead}
                        </CoverSubhead>
                        <CoverDescription>
                            {dataCover.descritption}
                        </CoverDescription>
                        <CtaWrapper>
                            <CallToAction>
                                explore demos
                            </CallToAction>
                            <CallToAction className="gray">
                                features
                            </CallToAction>
                        </CtaWrapper>
                        
                    </div>
                    <div className="col-lg-6 ml-auto padding-none">
                        <VideoWrapper>
                            <Poster></Poster>
                        </VideoWrapper>
                        
                        <ButtonPlay onClick={clickPlaying} playing={playerPlaying}>
                            <i className="fa fa-play"></i>
                        </ButtonPlay>
                        <WrapperIframe playing={playerPlaying}>
                            <ContainerIframe>
                                <ReactPlayer className="responsive-iframe" url="https://www.youtube.com/embed/M5S_JBRjd1s?rel=0&showinfo=0" playing={playerPlaying} controls={playerPlaying}/>
                            </ContainerIframe>
                        </WrapperIframe>
                    </div>
                   
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
    background-image: linear-gradient(135deg, #1b6bf9 0%, #764ba2 100%);
    padding-top: 120px;
    padding-bottom: 120px;
    ::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #191919;
        border-radius: inherit;
        opacity:0.1;
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

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    align-items:center;
    justify-content:center;
   
    .padding-none {
        padding-left:0;
        padding-right:0;
        @media(max-width:768px) {
            padding:0 15px;
        }
    }
`


const CoverTitle = styled.h3`
    color: #fff;
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 1.5;
    font-family:Dosis;
    letter-spacing: 0.5px;
    margin-bottom:0;
    @media(max-width:576px) {
        font-size:42px;
        text-align:center;
    }
`

const CoverDescription = styled.p`
    color: rgba(255,255,255,0.85);
    font-family:Open Sans;
    font-size: 1.17188rem !important;
    margin-bottom: 3rem !important;
    margin-top: 2rem !important;
    font-weight: 300;
    @media(max-width:576px) {
        font-size:15px;
        text-align:center;
    }
`

const ButtonPlay = styled.button`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 64px;
    height: 64px;
    border-radius: 10rem;
    color: #fff;
    background-color: #50a1ff;
    margin:3rem auto 0;
    outline:none !important;
    border:none  !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition:all 0.4s ease-in-out;
    z-index:${props => (props.playing === true ? "0" : "20")};
    transition: .3s;
    i {
        margin-left: 4px;
        font-size: 0.875rem;
        color: white;
    }
    :hover{
        box-shadow:1px 2px 5px 0px #50a1ff;
    }
    
`


const CoverSubhead = styled.h5`
  color: #fff;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.5;
  font-family:Dosis;
  @media(max-width:576px) {
    font-size:42px;
    text-align:center;
  }
`
const CallToAction = styled.button`
    border-radius: 10rem;
    text-transform:uppercase;
    font-size: 11px;
    padding: 8px 26px 6px;
    line-height: 1.9;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    letter-spacing: 1.7px;
    color: #fff;
    background-color: #ffba00;
    border-color: #ffba00;
    font-family:Open Sans;  
    font-weight: 600;
    margin: 8px; 
    @media(max-width:576px) {
        max-width:200px;
        margin:8px auto;
    }
`
const CtaWrapper = styled.div`
    display:flex;
    @media(max-width:576px) {
        flex-direction:column;
        margin-bottom:2rem;
    }
    .gray {
        color:rgba(255,255,255,0.6);
        background-color: transparent;
        border: 1px solid rgba(255,255,255,0.3);
        :hover {
            background-color: rgba(255,255,255,0.9);
            color:gray;
        }
    }
`

const VideoWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
    margin-top: 5rem;
    border-radius: .25rem !important;
    box-sizing: border-box;
    ::before {
        display: block;
        content: "";
        z-index: 0;
        padding-top: 56.25%;
    }
    
`

const Poster = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: 100%;
    background-position: 50% 50%;
    border-radius: inherit;
    z-index: 1;
    transition: .3s;
    background-image:url(/shot-1.png);
`

const ContainerIframe = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    max-width:570px;
    max-height:320px;
    
    @media(max-width:768px) {
        max-width:690px;
        max-height:388px;
    }
    @media(max-width:576px) {
        max-width:305px;
        max-height:170px;
    }
  }
`


const WrapperIframe = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: inherit;
  margin-top: 5rem !important;
  max-width:570px;
  max-height:320px;
  transition:all 0.4s ease-in-out;
  z-index:${props => (props.playing === true ? "10" : "0")};
  
  @media(max-width:768px) {
    max-width:690px;
    max-height:388px;
    padding:0 15px;
  }
  @media(max-width:576px) {
    max-width:305px;
    max-height:170px;
  }
`

CoverComponents6.propTypes = {
  
}

CoverComponents6.defaultProps = {
  
}

export default CoverComponents6