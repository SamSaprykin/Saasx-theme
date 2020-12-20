import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '100%',
      height                : '100%',
      background            : 'black',
      padding               : '0',
    }
};

const processData = {
    title:"About Us",
    description:"Easily track any workout you can imagine. Use any of our free workouts or make up your own.",
    information:"Awesome Template Developers",
    linkTo:"/",
    videoLink:"https://www.youtube.com/embed/F-1weFCiYBA",
}

class VideoComponent7 extends React.Component {
    state = { modalIsOpen: false }

    openModal = e => {
        this.setState({
            modalIsOpen: true,
        })
    }

    closeModal = e => {
        this.setState({
            modalIsOpen: false,
        })
    }
    render() {
        return (
            <>
              <BlockHeader>Block 7</BlockHeader>
              <SectionBackground>
                  <Container>
                      <StyledRow>
                        <div className="col-md-5 mx-auto pb-7">
                            <TitleSection>
                                    {processData.title}
                            </TitleSection>
                            <InformationSection>
                                    {processData.information}
                            </InformationSection>
                            <DescriptionSection>
                                    {processData.description}
                            </DescriptionSection>
                        </div>
                        <div className="col-md-5 mx-auto text-center">
                            <ButtonOpen onClick={this.openModal}><i className="fa fa-play"></i></ButtonOpen>
                        </div>
                      </StyledRow>
                      
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <ModalContent>
                                <ButtonClose onClick={this.closeModal}></ButtonClose>
                                <WrapperIframe>
                                <ContainerIframe>
                                    <StyledIframe className="responsive-iframe" src={processData.videoLink}></StyledIframe>
                                </ContainerIframe>
                                </WrapperIframe>
                            </ModalContent>
                            
                        </Modal>
                  </Container>
              </SectionBackground>
            </>
          )
    }
    
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
    background-image:url("/blogCard3.jpg");
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding-top: 7rem;
    padding-bottom: 7rem;
    :before {
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
        border-top: 1px solid rgba(255,255,255,0.15);
        border-top-color: rgba(255,255,255,0.15);
        width: 50px;
        margin: 2.5rem auto 1.5rem;
    }
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    align-items:center;
    div {
        padding:0;
    }
`


const TitleSection = styled.h4`
    color: #fff;
    letter-spacing: 0.5px;
    margin-bottom: .5rem;
    font-family:Dosis;
    font-size: 3.5rem;
    font-weight: 200;
    line-height: 1.5;
`

const DescriptionSection = styled.p`
    color: rgba(255,255,255,0.85);
    font-weight: 400 !important;
    font-size: 1.17188rem !important;
    margin-bottom: 3rem !important;
    line-height: 1.9;
    font-family:Open Sans;
`

const InformationSection = styled.div`
    font-size: 1.64063rem !important;
    font-weight: 300;
    margin-bottom: 1rem;
    line-height: 1.9;
    color: rgba(255,255,255,0.85);
    font-family:Open Sans;
`

const ButtonClose = styled.a`
    padding:16px 32px;
    position: fixed;
    right: 0;
    top: 0;
    color: gray;
    font-family: "Open Sans",sans-serif;
    font-weight: 100;
    outline:none;
    border:none;
    cursor:pointer;
    :hover {
      color:white;
    }
    ::before {
      display: inline-block;
      content: "\\00d7"; /* This will render the 'X' */
      font-size:40px;
    }
`
const ContainerIframe = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  top:50%;
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none !important;
`

const WrapperIframe = styled.div`
  width:100%;
  height:100%;
  max-width:960px;
  max-height:475px;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:10%;
`

const ModalContent = styled.div`
  position:relative;
`



const ButtonOpen  = styled.a`
  margin:48px auto 0;
  cursor:pointer;
  width: 98px;
  height: 98px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 0.3s;
  color: #fff;
  background-color: #926dde;
  i {
    color:white;
    transition: all 0.3s;
  }
  :hover {
    box-shadow: 0 4px 10px #926dde;
  }
`

const ListSteps = styled.ol`
  padding-left:40px;
`

const Step = styled.li`
    display: flex;
    padding: 1rem 0;
    list-style: none;
    text-align:left;
    h5 {
        font-weight: 500;
        color: #323d47;
        letter-spacing: 0.75px;
        line-height: 1.5;
        font-family:Dosis;
        font-size: 1.05469rem;
    }
    p {
        font-family: Open Sans;
        font-size: .9375rem;
        font-weight: 300;
        line-height: 1.9;
        color: #757575;
        letter-spacing: 0.15px;
    }
`
const StepIcon = styled.div`
    position: relative;
    
    flex-shrink: 0;
    text-align: center;
    margin-right:64px;
    margin-left:20px;
    span {
        color: #bfc5ca;
        background-color: #eaeff4;
        font-size: 1.5rem;
        width: 48px;
        height: 48px;
        line-height: 48px;
        display:block;
        text-align:center;
        border-radius: 10rem;
        font-family:Open Sans;
        :before {
            content: '';
            position: absolute;
            left: 50%;
            top: 48px;
            bottom: -2rem;
            margin-left: -1px;
            border-left: 2px dashed #eaeff4;
        }
    }
`

VideoComponent7.propTypes = {
  
}

VideoComponent7.defaultProps = {
  
}

export default VideoComponent7