import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"


const PostComments = () => (
  <>
    <CommentsArea className="comments-area">
        <div className="comments-section">
            <CommentsTitle>Posts Comments</CommentsTitle>
            <Comments className="comments">
                <li className="comment even thread-even depth-1" id="comment-1">
                    <div className="comment-item">
                        <div className="comment-thumb">
                            <div className="comment-img"><img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="img" alt="" /></div>
                        </div>
                        <CommentMainArea>
                            <div>
                                <div>
                                    <h4>Jhon Castellon <span className="comments-date">jan 05, 2020 at 8:00</span></h4>
                                </div>
                                <div className="comment-area">
                                    <p>Home renovations, especially those involving plentiful of demolition can be a very dusty affair. This nasty dust can easily free flow through your house.</p>
                                    <div className="comments-reply">
                                        <a className="comment-reply-link" href="#"><span>Reply</span></a>
                                    </div>
                                </div>
                            </div>
                        </CommentMainArea>
                    </div>
                    <ul className="children">
                        <li className="comment">
                            <div className="comment-item">
                                <div className="comment-thumb">
                                    <div className="comment-img"><img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="img" alt="" /></div>
                                </div>
                                <CommentMainArea>
                                    <div>
                                        <div>
                                            <h4>José Carpio <span className="comments-date">jan 15, 2020 at 8:00</span></h4>
                                        </div>
                                        <div className="comment-area">
                                            <p>Home renovations, especially those involving plentiful of demolition can be a very dusty affair. This nasty dust can easily free flow through your house.</p>
                                            <div className="comments-reply">
                                                <a className="comment-reply-link" href="#"><span>Reply</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </CommentMainArea>
                            </div>
                        </li>
                    </ul>
                </li>
            </Comments>
        </div>
    </CommentsArea>
  </>
)

const CommentsArea = styled.div`
    margin-top: 40px;
`
const Comments = styled.ol`
    list-style-type: none;
    padding-left: 0; 
    .comment-item {
        border-bottom: 1px solid rgba(17,17,17,0.05);
        padding: 35px;
        position: relative;
        .comment-thumb {
            position: absolute;
            left: 35px; 
            img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
        }
    }
    ul {
        padding-left: 30px;
        list-style-type: none;
        margin: 0;
        li {
            :last-child div {
                border-bottom: 0;
            }
        }
    }
`

const CommentsTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;
`

const CommentMainArea = styled.div`
    padding-left: 100px;
    p {
        margin-bottom: 20px;
    }
    h4 {
        font-family: "Poppins", sans-serif;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: -1px;
        span {
            font-family: "Work Sans", sans-serif;
            font-weight: 600;
            text-transform: none;
            display: inline-block;
            font-size: 12px;
            text-transform: uppercase;
            margin-left: 5px;
        }
    }
    a {
        font-family: "Work Sans", sans-serif;
        font-size: 12px;
        font-weight: 600;
        color: #2550de;
        display: inline-block;
        text-transform: uppercase;
        padding-left: 35px;
        position: relative;
        :before{
            background-color: #2550de;
            position: absolute;
            content: "";
            width: 30px;
            height: 2px;
            left: 0;
            top: calc(50% - 1px);
        }
        :hover{
            text-decoration: underline;
        }
    }
`


PostComments.propTypes = {
  
}

PostComments.defaultProps = {
  
}

export default PostComments