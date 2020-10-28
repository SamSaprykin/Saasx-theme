import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const ProjectContent = () => (
  <Container>
    <ImageWrapper>
        <img src="https://via.placeholder.com/1170x660.png?text=SaasX" alt="img" />
    </ImageWrapper>
    <ProjectContentWrapper>
        <h2>Project Overview</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium <br/>voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cuitate <br/>non provident, similique sunt in culpa qui officia deserunt mollitia animi,</p>
    </ProjectContentWrapper>
    <ProjectDescritption>
        <Row>
            <div className="col-md-3 col-sm-6 xs-padding">
                <ProjectInfo>
                    <h3>Client</h3>
                    <span>Themeforest</span>
                </ProjectInfo>
            </div>
            <div className="col-md-3 col-sm-6 xs-padding">
                <ProjectInfo>
                    <h3>Created</h3>
                    <span>Romiz Raza</span>
                </ProjectInfo>
            </div>
            <div className="col-md-3 col-sm-6 xs-padding">
                <ProjectInfo>
                    <h3>Completed</h3>
                    <span>24 October 2019</span>
                </ProjectInfo>
            </div>
            <div className="col-md-3 col-sm-6 xs-padding">
                <ProjectInfo>
                    <h3>Skill</h3>
                    <span>Photoshop, UI/UX</span>
                </ProjectInfo>
            </div>
        </Row>
    </ProjectDescritption>
  </Container>
)


const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    padding:100px 0;
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

const ProjectContentWrapper = styled.div`
    text-align:center;
    margin-bottom:50px;
`

const ImageWrapper = styled.div`
    padding-top: 0;
    margin-bottom:50px;
`

const ProjectDescritption = styled.div`
    text-align: center!important;
`

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

const ProjectInfo = styled.div`
    h3{
        margin-bottom: -2px;
        font-weight: 600;
    }
`

ProjectContent.propTypes = {
  
}

ProjectContent.defaultProps = {
  
}

export default ProjectContent