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
    title:"Watch It Grow",
    subhead:"video",
    description:"Explore the best SaaS template in the market in a short 1-minute video.",
    imageCover:"/blogCard3.jpg",
    headerCard:"We made it so easy to create a SaaS website with few copy and pastes.",
    linkTo:"/",
    videoLink:"https://www.youtube.com/embed/F-1weFCiYBA",
}

class VideoComponent4 extends React.Component {
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
              <BlockHeader>Block 4</BlockHeader>
              <SectionBackground>
                  <Container>
                      <HeaderSection>
                          <SubheadSection>
                                {processData.subhead}
                          </SubheadSection>
                          <TitleSection>
                                {processData.title}
                          </TitleSection>
                          <DescriptionSection>
                                {processData.description}
                          </DescriptionSection>
                      </HeaderSection> 
                      <StyledRow>
                          <div className="col-md-8 mx-auto">
                            <BlogCard>
                                <ImageContainer>
                                    <HeaderCard>{processData.headerCard}</HeaderCard>
                                    <img  src={processData.imageCover} alt="Card image cap" />
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
    align-items:center;
`

const HeaderSection = styled.div`
    text-align: center;
    max-width: 70%;
    margin: 0 auto 70px;
    @media (max-width: 576px) {
        max-width: 90%;
    }
`

const HeaderCard = styled.h3`
    position:absolute;
    left:50%;
    top:30%;
    transform:translate(-50%,-50%);
    color: #fff;
    font-size: 1.52344rem;
    margin-bottom: .5rem;
    font-family:Dosis;
    font-size: 1.52344rem;
    letter-spacing: 0.5px;
    font-weight: 500;
    @media (max-width: 768px) {
        width:80%;
    }
    @media (max-width: 576px) {
        width:100%;
        font-size:22px;
        
    }
`

const SubheadSection = styled.span`
    display: inline-block;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    margin-bottom: 1.5rem;
    word-spacing: 2px;
    color: rgba(153,153,153,0.6);
    font-family:Open Sans;
`

const TitleSection = styled.h4`
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 2.10938rem;
    margin-bottom: .5rem;
    font-family:Dosis;
    line-height: 1.5;
    margin-bottom:50px;
    @media (max-width: 576px) {
        font-size: 30px;
    }
`

const DescriptionSection = styled.p`
    font-size: 1.125rem;
    font-weight: 300;
    margin-bottom: 1rem;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
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
    img {
        border-radius: 0.75rem !important;
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
  width: 72px;
  height: 72px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 0.3s;
  color: #fff;
  background-color: #50a1ff;
  i {
    color:white;
    transition: all 0.3s;
  }
  :hover {
    box-shadow: 0 1px 10px #50a1ff;
    width: 72px;
    height: 72px;
  }
  @media (max-width: 768px) {
    top:75%;
  }

`




VideoComponent4.propTypes = {
  
}

VideoComponent4.defaultProps = {
  
}

export default VideoComponent4