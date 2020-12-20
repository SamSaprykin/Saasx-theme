import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Modal from 'react-modal'
import AnimeImage from "../../Animation/AnimeImage"

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
    title:"We made it easy peasy",
    descritption:"Fresh fellow even the whole is work outcome them. They original on mountains, drew the support time. The of to graduate. Into to is the to she at return understand every in there transmitting you've he the was and in finger.",
    imageCover:"/blogCard4.jpg",
    linkTo:"/",
    videoLink:"https://www.youtube.com/embed/F-1weFCiYBA",
}

class VideoComponent5 extends React.Component {
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
              <BlockHeader>Block 5</BlockHeader>
              <SectionBackground>
                  <Container>
                      <StyledRow>
                          <div className="col-md-4 mx-auto text-center text-md-left">
                            <BlogCard>
                                <TitleSection>
                                    {processData.title}
                                </TitleSection>
                                <DescriptionSection>
                                    {processData.descritption}
                                </DescriptionSection>
                                
                                <ButtonOpen onClick={this.openModal}><i className="fa fa-play"></i> Watch a video</ButtonOpen>
                               
                               
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
                          <div className="col-md-6">
                              <AnimeImage>
                                <ImageContainer>
                                    <img  src={processData.imageCover} alt="Card image cap" />
                                </ImageContainer>
                              </AnimeImage>  
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
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 1.75781rem;
    margin-bottom: .5rem;
    font-family:Dosis;
    line-height: 1.5;
    margin-bottom:8px;
`

const DescriptionSection = styled.p`
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
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
    padding: 7px 32px 6px;
    font-size: 12px;
    margin-top: 20px;
    transition: all 0.3s;
    display: inline-block;
    font-weight: 600;
    text-transform:uppercase;
    font-size: 12px;
    color: #926dde;
    background-color: transparent;
    background-image: none;
    border:1px solid #926dde;
    line-height: 2.2;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    border-radius: 2px;
    outline: none;
    width:100%;
    max-width:220px;
    i {       
        margin-right: 1rem !important;
    }
    :hover {
        color:#926dde;
    }

`

const Media = styled.div`
    display:flex;
    margin-top: 3rem !important;
    align-items:center;
    cursor:pointer;
`

const CallToAction = styled.span`
    color: #757575 !important;
    text-transform: uppercase !important;
    font-size:12.75px;
    font-weight: 600;
    font-family:Open Sans;
`

VideoComponent5.propTypes = {
  
}

VideoComponent5.defaultProps = {
  
}

export default VideoComponent5