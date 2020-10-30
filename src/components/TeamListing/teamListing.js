import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"
import TeamMemberCard from "../TeamMemberCard/teamMemberCard"

const TeamListing = () => (
  <>
    <TeamSectionWrapper>
        <Container>
            <TeamWrapRow>
                <TeamMemberCard />
                <TeamMemberCard />
                <TeamMemberCard />
                <TeamMemberCard />
            </TeamWrapRow>
        </Container>
    </TeamSectionWrapper>
  </>
)

const TeamSectionWrapper = styled.section`
    padding:100px 0;
    @media (max-width: 992px) {
        padding: 60px 0;
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
const TeamWrapRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

TeamListing.propTypes = {
  
}

TeamListing.defaultProps = {
  
}

export default TeamListing