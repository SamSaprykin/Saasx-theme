import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import VideoComponent1 from "./videoComponent1"
import VideoComponent2 from "./videoComponent2"
import VideoComponent3 from "./videoComponent3"
import VideoComponent4 from "./videoComponent4"
import VideoComponent5 from "./videoComponent5"
import VideoComponent6 from "./videoComponent6"
import VideoComponent7 from "./videoComponent7"

const VideoComponentsList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <VideoComponent1 />
            <VideoComponent2 />
            <VideoComponent3 />
            <VideoComponent4 />
            <VideoComponent5 />
            <VideoComponent6 />
            <VideoComponent7 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

VideoComponentsList.propTypes = {
  
}

VideoComponentsList.defaultProps = {
  
}

export default VideoComponentsList