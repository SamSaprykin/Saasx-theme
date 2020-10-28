import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const ProjectSkills = () => (
  <Container>
    <Row>
        <div>
            <img src="https://via.placeholder.com/1170x550.png?text=SaasX" alt="img" />
            <Row className="row d-flex align-items-center">
                <div className="col-md-6">
                    <SkillContent>
                        <h2>Project Skills &amp; Expertise</h2>
                        <p>Funding freemium technology focus equity bootstrapping usernce niche <br/>market. Seed round agile development growth hacking retur investment <br/>alpha.Marketing pitch gen scrum project.Responsive web design. Agile <br/>development innovator termsheet is</p>
                    </SkillContent>
                </div>
                <div className="col-md-6">
                    <SkillItemWrapper>
                        <SkillItem className="skill_item">
                            <h3>Design</h3>
                            <div className="progress">
                                <div className="progress-bar wow slideInLeft"  role="progressbar" style={{width: "80%"}} >
                                    <span className="progress-text">80%</span>
                                </div>
                            </div>
                        </SkillItem>
                        <SkillItem className="skill_item">
                            <h3>Development</h3>
                            <div className="progress">
                                <div  className="progress-bar wow slideInLeft"  role="progressbar" style={{width: "90%"}} >
                                    <span className="progress-text">90%</span>
                                </div>
                            </div>
                        </SkillItem>
                        <SkillItem className="skill_item">
                            <h3>Marketing</h3>
                            <div className="progress">
                                <div className="progress-bar wow slideInLeft"  role="progressbar" style={{width: "75%"}} >
                                    <span className="progress-text">75%</span>
                                </div>
                            </div>
                        </SkillItem>
                        <SkillItem className="skill_item">
                            <h3>WordPress</h3>
                            <div className="progress">
                                <div className="progress-bar wow slideInLeft"  role="progressbar" style={{width: "65%"}} >
                                    <span className="progress-text">65%</span>
                                </div>
                            </div>
                        </SkillItem>
                    </SkillItemWrapper>
                </div>
            </Row>
        </div>
    </Row>
  </Container>
)


const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    padding:0 0 100px;
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

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items:center;
`

const SkillContent = styled.div`
    margin-top:50px;
`

const SkillItemWrapper = styled.ul`
    margin-top:50px;
`

const SkillItem = styled.li`
    margin-bottom: 20px;
    overflow: hidden;
    h3{
        font-size: 16px;
        font-weight: 600;
    }
    .progress {
        height: 10px;
        background-color: #ddd;
        box-shadow: none;
        margin-bottom: 0;
        overflow: visible;
    }
    .progress-bar{
        border-radius: 3px;
        line-height: 5px;
        background-color: #2550de;
        position: relative;
    }
    .progress-text {
        position: absolute;
        background-color: #2550de;
        font-size: 14px;
        font-weight: 600;
        right:20px;
    
    }
`

ProjectSkills.propTypes = {
  
}

ProjectSkills.defaultProps = {
  
}

export default ProjectSkills