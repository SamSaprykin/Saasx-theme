import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./projectsListing.css"

import TeamMemberCard from "../TeamMemberCard/teamMemberCard"

import styled from "styled-components"

const ProjectsListing = () => (
  <>
    <ProjectSection className="project-section padding">
        <Container>
            <ProjectRow>
                <TeamMemberCard  testPosition="center" />
                <TeamMemberCard  testPosition="center" />
                <TeamMemberCard  testPosition="center" />
                <TeamMemberCard  testPosition="center" />
            </ProjectRow>
        </Container>
    </ProjectSection>
  </>
)

const ProjectSection = styled.section`
    padding: 100px 0;
`

const ProjectRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
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

ProjectsListing.propTypes = {
  
}

ProjectsListing.defaultProps = {
  
}

export default ProjectsListing