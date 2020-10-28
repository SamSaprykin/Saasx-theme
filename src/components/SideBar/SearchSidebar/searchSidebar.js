import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const SearchSideBar = () => (
  <>
    <SearchForm action="" className="search-form">
        <input type="text" className="form-control" placeholder="Type here" />
        <SearchButton className="search-btn" type="button"><i className="fa fa-search"></i></SearchButton>
    </SearchForm>
  </>
)

const SearchForm = styled.form`
    position: relative;
    margin-left: -2px;  
    .form-control{
      background-color: #f5f5f5;
      box-shadow: none;
      width: 100%;
      display: block;
      border: 1px solid #e5e5e5;
      color: #263a4f;
      height: auto;
      padding: 15px 20px;
      border-radius: 2px;
      padding-right: 60px;
      :hover {
        cursor: pointer;
      }
  }
`

const SearchButton = styled.button`
    background-color: transparent;
    font-size: 15px;
    color: #263a4f;
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    padding: 10px 0;
    opacity: 0.6;
    border: none;
    ${SearchForm} :hover & {
      opacity: 1;
      
    }
 
    
`

SearchSideBar.propTypes = {
  
}

SearchSideBar.defaultProps = {
  
}

export default SearchSideBar