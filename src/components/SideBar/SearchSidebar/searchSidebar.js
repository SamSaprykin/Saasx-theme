import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./searchSideBar.css"

const SearchSideBar = () => (
  <>
    <div className="widget-content">
        <form action="" className="search-form">
            <input type="text" className="form-control" placeholder="Type here" />
            <button className="search-btn" type="button"><i className="fa fa-search"></i></button>
        </form>
    </div>
  </>
)

SearchSideBar.propTypes = {
  
}

SearchSideBar.defaultProps = {
  
}

export default SearchSideBar