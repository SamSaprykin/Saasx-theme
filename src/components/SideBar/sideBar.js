import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

import SearchSidebar from "./SearchSidebar/searchSidebar"
import Categories from "./Categories/categories"
import RecentPosts from "./RecentPosts/recentPosts"
import TagClouds from "./TagClouds/tagClouds"

const SideBar = () => (
  <>
    <div className="col-lg-4 padding-15">
        <SidebarWrapper className="sidebar-wrap">
            <SearchSidebar />
            <Categories />
            <RecentPosts />
            <TagClouds />
        </SidebarWrapper>
    </div>
  </>
)

const SidebarWrapper = styled.div`
  padding-left: 40px;
  @media(max-width:756px) {
    padding-left:0;
  }
`

SideBar.propTypes = {
  
}

SideBar.defaultProps = {
  
}

export default SideBar