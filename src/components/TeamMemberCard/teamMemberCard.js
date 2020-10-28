import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const TeamMemberCard = ({testPosition}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 padding-15">
        <TeamMemberWrapper className="team-box">
            <img src="https://via.placeholder.com/255x335.png?text=SaasX" alt="team" />
            <TeamMemberContent>
                <TeamMemberContentInner testPosition={testPosition}>
                    <h3>Marcos Scott</h3>
                    <span>developer</span>
                </TeamMemberContentInner>
            </TeamMemberContent>
        </TeamMemberWrapper>
    </div>
  )
}


const TeamMemberWrapper = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  :hover img{
    transform: scale(1.1);
  }
  
`

const TeamMemberContent = styled.div`
    background-color: rgba(0,123,255,0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    visibility: hidden;
    opacity: 0;
    transition: 0.2s ease-in-out;
    ${TeamMemberWrapper} :hover & {
      visibility: visible;
      opacity: 1;
    }
`

const TeamMemberContentInner = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
    bottom: 0;
    padding: 40px;
    visibility: hidden;
    opacity: 0;
    text-align: ${({ testPosition }) => {
      if (testPosition === "center") return "center;"
      if (testPosition === "") return "left;"
    }};
    transform: translateY(50px);
    transition: 0.2s ease-in-out;
    ${TeamMemberWrapper} :hover & {
      transform: translateY(0);
      transition: 0.2s ease-in-out;
      transition-delay: 0.2s;
      visibility: visible;
      opacity: 1;
    }
    h3{
      color: #fff;
      margin-bottom: 0;
    } 
    span{
      color: #ddd;
      font-family: "Work Sans",sans-serif;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0;
    }
`

TeamMemberCard.propTypes = {
  
}

TeamMemberCard.defaultProps = {
  
}

export default TeamMemberCard