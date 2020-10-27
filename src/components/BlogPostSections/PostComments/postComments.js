import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./postComments.css"

const PostComments = () => (
  <>
    <div className="comments-area">
        <div className="comments-section">
            <h3 className="comments-title">Posts Comments</h3>
            <ol className="comments">
                <li className="comment even thread-even depth-1" id="comment-1">
                    <div id="div-comment-1">
                        <div className="comment-thumb">
                            <div className="comment-img"><img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="img" alt="" /></div>
                        </div>
                        <div className="comment-main-area">
                            <div className="comment-wrapper">
                                <div className="comments-meta">
                                    <h4>Jhon Castellon <span className="comments-date">jan 05, 2020 at 8:00</span></h4>
                                </div>
                                <div className="comment-area">
                                    <p>Home renovations, especially those involving plentiful of demolition can be a very dusty affair. This nasty dust can easily free flow through your house.</p>
                                    <div className="comments-reply">
                                        <a className="comment-reply-link" href="#"><span>Reply</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="children">
                        <li className="comment">
                            <div>
                                <div className="comment-thumb">
                                    <div className="comment-img"><img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="img" alt="" /></div>
                                </div>
                                <div className="comment-main-area">
                                    <div className="comment-wrapper">
                                        <div className="comments-meta">
                                            <h4>José Carpio <span className="comments-date">jan 15, 2020 at 8:00</span></h4>
                                        </div>
                                        <div className="comment-area">
                                            <p>Home renovations, especially those involving plentiful of demolition can be a very dusty affair. This nasty dust can easily free flow through your house.</p>
                                            <div className="comments-reply">
                                                <a className="comment-reply-link" href="#"><span>Reply</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li className="comment">
                                    <div>
                                        <div className="comment-thumb">
                                            <div className="comment-img"><img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="img" alt="" /></div>
                                        </div>
                                        <div className="comment-main-area">
                                            <div className="comment-wrapper">
                                                <div className="comments-meta">
                                                    <h4>Valentin Lacoste <span className="comments-date">jan 25, 2020 at 8:00</span></h4>
                                                </div>
                                                <div className="comment-area">
                                                    <p>Home renovations, especially those involving plentiful of demolition can be a very dusty affair. This nasty dust can easily free flow through your house.</p>
                                                    <div className="comments-reply">
                                                        <a className="comment-reply-link" href="#"><span>Reply</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="comment">
                    <div>
                        <div className="comment-thumb">
                            <div className="comment-img"><img src="https://via.placeholder.com/100x100.png?text=SaasX" alt="img" alt="" /></div>
                        </div>
                        <div className="comment-main-area">
                            <div className="comment-wrapper">
                                <div className="comments-meta">
                                    <h4>Kyle Frederick <span className="comments-date">jan 02, 2020 at 8:00</span></h4>
                                </div>
                                <div className="comment-area">
                                    <p>Home renovations, especially those involving plentiful of demolition can be a very dusty affair. This nasty dust can easily free flow through your house.</p>
                                    <div className="comments-reply">
                                        <a className="comment-reply-link" href="#"><span>Reply</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    </div>
  </>
)

PostComments.propTypes = {
  
}

PostComments.defaultProps = {
  
}

export default PostComments