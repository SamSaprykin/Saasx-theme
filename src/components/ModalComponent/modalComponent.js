import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
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


class ModalComponent extends React.Component {
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
    
    console.log(this.props.data)
    return (
      <>
        <BlogCard>
            <ImageContainer>
                <Link to="#"><img  src={this.props.data.image} alt="Card image cap" /></Link>
                <ButtonOpen onClick={this.openModal}><i className="fa fa-play"></i></ButtonOpen>
            </ImageContainer>
            <TextContent >
                <BlogCardText>
                    <Link to="#">{this.props.data.text}</Link>
                </BlogCardText>
                <BlogCategory>
                    <Link to="/"> {this.props.data.category} </Link>
                </BlogCategory>
            </TextContent>
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
                    <StyledIframe className="responsive-iframe" src={this.props.data.videoLink}></StyledIframe>
                </ContainerIframe>
                </WrapperIframe>
            </ModalContent>
            
        </Modal>
      </>
    )
  }
}

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

const BlogCardText = styled.h5`
    font-family:Dosis;
    letter-spacing: 0.5px;
    font-size: 1.05469rem;
    width:90%;
    letter-spacing: 0.75px;
    text-align:center;
    margin:0 auto 8px;
    a {
        color: #191919;
        :hover {
          color: #50a1ff;
        }
    }
`

const TextContent = styled.div`
    text-align:center;
    margin-top:20px;
    background-color: #fafbfb;
`

const BlogCategory = styled.p`
    a {
        color: #bfc5ca;
        font-weight:500;
        letter-spacing: 2px;
        font-size: 12.75px;
        font-family:Open Sans;
    }
`

const ImageContainer = styled.div`
    position:relative;
    img {
        border-radius:4px;
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

const WrapperMedia = styled.div`

`

const ButtonOpen  = styled.a`
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  width:56px;
  height:56px;
  border-radius:50%;
  background-color: rgba(248,249,250,0.6);
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 0.3s;
  i {
    color:white;
    transition: all 0.3s;
  }
  :hover {
    background-color: rgba(248,249,250,1);
    width:60px;
    height:60px;
    i {
      color:lightgray;
    }
  }
`

export default ModalComponent
