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
    title:"Give a Fresh Design to Your SaaS",
    descritption:"Fresh fellow even the whole is work outcome them. They original on mountains, drew the support time. The of to graduate. Into to is the to she at return understand every in there transmitting you've he the was and in finger.",
    imageCover:"/thumb-10.jpg",
    linkTo:"/",
    videoLink:"https://www.youtube.com/embed/F-1weFCiYBA",
}

class VideoComponent1 extends React.Component {
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
              <BlockHeader>Block 1</BlockHeader>
              <SectionBackground>
                  <Container>
                      <StyledRow>
                          <div className="col-md-6 bg-img video-btn-wrapper order-md-2">
                            <BlogCard>
                                <ImageContainer>
                                    <Link to="#"><img  src={processData.imageCover} alt="Card image cap" /></Link>
                                    <ButtonOpen onClick={this.openModal}><i className="fa fa-play"></i></ButtonOpen>
                                </ImageContainer>
                                
                            </BlogCard>
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
                          </div>
                          <div className="col-10 col-md-4 mx-auto py-7 py-md-9 text-white">
                                <TitleSection>
                                    {processData.title}
                                </TitleSection>
                                <DescriptionSection>
                                    {processData.descritption}
                                </DescriptionSection>
                          </div>
                      </StyledRow>
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
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    background-color: #4f8cf2;
   
`

const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    align-items:center;
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
    font-size: 1.23047rem;
    margin-bottom: .5rem;
    font-family:Dosis;
    line-height: 1.5;
    margin-bottom:8px;
    font-weight:600;
    @media (max-width: 768px) {
        margin-top:32px;
    }
    @media (max-width: 576px) {
        font-size:17.3px;
    }
`

const DescriptionSection = styled.p`
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: rgba(255,255,255,0.85);
    font-family:Open Sans;
    @media (max-width: 768px) {
        margin-bottom:32px;
    }
    @media (max-width: 576px) {
        font-size:13.1px;
    }
`



const BlogCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,0.125);
    border-radius: .25rem;
    transition: all .5s;
    cursor:pointer;
    
`


const ImageContainer = styled.div`
    position:relative;
    min-height: 400px;
    @media (max-width: 576px) {
        min-height: 300px;
    }
    :before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #191919;
        border-radius: inherit;
        opacity: .4;
    }
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
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 0.3s;
  color: #fff;
  background-color: #ff4954;
  border-color: #ff4954;
  box-shadow: 0 1px 10px rgba(146,109,222,0.4);
  width: 64px;
  height: 64px;
  font-size: 16px;
  i {
    color:white;
    transition: all 0.3s;
  }
  :hover {
    box-shadow: 0 1px 5px #ff4954;
    width: 68px;
    height: 68px;
  }
`

VideoComponent1.propTypes = {
  
}

VideoComponent1.defaultProps = {
  
}

export default VideoComponent1