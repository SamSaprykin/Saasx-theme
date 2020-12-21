import React, {useState} from "react"
import styled, {keyframes} from "styled-components"
import Modal from 'react-modal'
import { Link } from 'gatsby'

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


const dataCover = {
    title:"Landing Page For Your SaaS",
    descritption:"Watch a demo video in one minute before taking your decision",

}

const CoverComponents3 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = e => {
        setIsOpen(true)
    }

    const closeModal = e => {
        setIsOpen(false)
    }
    return (
      <>
        <BlockHeader>Block 3</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-lg-8 pt-10">
                        <CoverTitle>
                            {dataCover.title}
                        </CoverTitle>
                        <CoverDescription>
                            {dataCover.descritption}
                        </CoverDescription>
                        <ButtonPlay onClick={openModal}>
                            <i className="fa fa-play"></i>
                        </ButtonPlay>
                        <TextPurchase><span> Or </span> <Link to="/">Purchase now</Link> </TextPurchase>
                    </div>
                    <WrapperArrow className="col-12">
                        <LinkArrow>
                            <ArrowSpan></ArrowSpan>
                        </LinkArrow>
                        
                    </WrapperArrow>
                </StyledRow>
            </Container>
        </SectionBackground>
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <ModalContent>
                <ButtonClose onClick={closeModal}></ButtonClose>
                <WrapperIframe>
                <ContainerIframe>
                    <StyledIframe className="responsive-iframe" src="https://www.youtube.com/embed/8kooIgKESYE"></StyledIframe>
                </ContainerIframe>
                </WrapperIframe>
            </ModalContent>
            
        </Modal>
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
    background-image:url(/video_background.jpg);
    ::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #191919;
        border-radius: inherit;
        opacity:0.7;
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
    div {
        text-align: center !important;
    }
    .pt-10 {
        padding-top: 9rem !important;
    }
    .pb-7 {
        padding-bottom: 3rem !important;
    }
`


const CoverTitle = styled.h3`
    color: #fff;
    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 2.57813rem;
    font-family:Dosis;
    font-weight: 500;
    @media(max-width:768px) {
        font-size:36px;
    }
`

const CoverDescription = styled.p`
    color: rgba(255,255,255,0.85);
    font-family:Open Sans;
    font-size: 1.17188rem;
    margin-bottom: 5rem;
    margin-top: 2rem;
    font-weight: 300;
    @media(max-width:576px) {
        font-size:15px;
        margin-bottom: 3rem;
    }
`

const ButtonPlay = styled.button`
    display: flex;
    align-items: center;
    justify-content:center;
    width:64px;
    height:64px;
    border-radius: 10rem;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    margin:0 auto;
    outline:none !important;
    border:none  !important;
    margin-bottom:32px;
    i {
        margin-left: 4px;
        font-size: 0.875rem;
        color: #757575;
    }
    :hover{
        box-shadow:1px 2px 5px 0px #f8f9fa;
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

const TextPurchase = styled.p`
  color: rgba(255,255,255,0.8);   
  padding-bottom: 2px;
  a {
    border-bottom: 1px dashed white;
    font-size:12.75px;
    color: rgba(255,255,255,0.8);
    font-family:Open Sans;
  }
  span {
      margin-right:8px;
      
  }
`

const ArrowSpan = styled.span`
    color: rgba(255,255,255,0.8);
    border-color: #fff;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0 5px;
    border-left: 1px solid rgba(255,255,255,0.8);
    border-bottom: 1px solid rgba(255,255,255,0.8);
    transform: rotate(-45deg);
    animation: scrollDown1 2s infinite;
    
`

const LinkArrow = styled(Link)`
    color: rgba(255,255,255,0.8);
    
`

const WrapperArrow = styled.div`
    padding-bottom: 3rem !important;
`

CoverComponents3.propTypes = {
  
}

CoverComponents3.defaultProps = {
  
}

export default CoverComponents3