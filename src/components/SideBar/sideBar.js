import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./sideBar.css"

import SearchSidebar from "./SearchSidebar/searchSidebar"
import Categories from "./Categories/categories"
import RecentPosts from "./RecentPosts/recentPosts"
import TagClouds from "./TagClouds/tagClouds"

const SideBar = () => (
  <>
    <div className="col-lg-4 padding-15">
        <div className="sidebar-wrap">
            <SearchSidebar />
            <Categories />
            <RecentPosts />
            <TagClouds />
        </div>
    </div>
  </>
)

SideBar.propTypes = {
  
}

SideBar.defaultProps = {
  
}

export default SideBar