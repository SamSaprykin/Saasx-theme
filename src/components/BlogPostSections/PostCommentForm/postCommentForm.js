import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const PostCommentForm = () => (
  <>
    <CommentRespond className="comment-respond">
        <h3>Write a Comment</h3>
        <CommentForm method="post" id="commentform">
            <div >
                <textarea id="comment" placeholder="Write Your Comments..."></textarea>
            </div>
            <div className="form-inputs">
                <input placeholder="Website" type="url" />
                <input placeholder="Name" type="text" />
                <input placeholder="Email" type="email" />
            </div>
            <div className="form-submit">
                <Input id="submit" type="submit" />
            </div>
        </CommentForm>
    </CommentRespond>
  </>
)

const CommentRespond = styled.div`
    h3 {
        font-size: 22px;
        font-weight: 600;
        letter-spacing: -1px;
        margin-bottom: 20px;
    }
`

const CommentForm = styled.form`
    textarea, input {
        background-color: #f5f5f5;
        border: 1px solid #e5e5e5;
        width: 100%;
        height: 50px;
        padding: 6px 15px;
        margin-bottom: 15px;
        outline: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
        transition: all 0.3s;
        :focus {
            border-color: #2550de;
        }
    }
    textarea {
        height: 200px;
        padding: 15px;
    }
    input:nth-child(2) {
        width: 49%;
        float: left;
    }
    input:nth-child(3) {
        width: 49%;
        float: right;
    }
`


const Input = styled.input.attrs({ 
    type: 'submit',
    value: 'Submit'
  })`
    font-family: "Work Sans", sans-serif;
    max-width: 180px;
    background-color: #2550de !important;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1px;
    margin-bottom: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
    border-radius: 0;
    text-transform: uppercase;
    :focus {
        opacity:0.9;
    }
  `

PostCommentForm.propTypes = {
  
}

PostCommentForm.defaultProps = {
  
}

export default PostCommentForm







