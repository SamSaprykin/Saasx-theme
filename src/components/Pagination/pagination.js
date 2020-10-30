import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Pagination = ({ numPages, currentPage, contextPage, marginBottom, slugPrefix }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? `${slugPrefix}` : `${slugPrefix}/` + (currentPage - 1).toString()
  const nextPage = `${slugPrefix}/` + (currentPage + 1).toString()
  if (numPages <= 1) {
    return null
  }
  
  const createPaginationObjects = (length, page, increment = 2) =>
    Array.from({ length }, (_, i) => ({
      link: `${slugPrefix}/${i + increment}/`,
      index: i + increment,
      current: page === i + increment,
    }));

  let navItems = [
    {
      link: `${slugPrefix}/`,
      index: 1,
      current: currentPage === isFirst,
    },
  ];
  if (numPages <= 5) {
    navItems = [
      ...navItems,
      ...Array.from({ length: numPages - 1 }, (_, i) => ({
        link: `${slugPrefix}/${i + 2}/`,
        index: i + 2,
        current: currentPage === i + 2,
      })),
    ];
  } else {
    if (currentPage <= 3) {
      navItems = [
        ...navItems,
        ...createPaginationObjects(3, currentPage),
        {
          separator: true,
          index: 'starter-separator',
        },
        {
          link: `${slugPrefix}/${numPages}/`,
          index: numPages,
          current: false,
        },
      ];
    } else if (currentPage > numPages - 3) {
      // If the current one is closer to the last one
      navItems = [
        ...navItems,
        {
          separator: true,
          index: 'finisher-separator',
        },
        ...createPaginationObjects(4, currentPage, numPages - 3),
      ];
    } else {
      navItems = [
        ...navItems,
        {
          separator: true,
          index: 'starter-separator',
        },
        ...createPaginationObjects(3, currentPage, currentPage - 1),
        
        {
          link: `${slugPrefix}/${numPages}/`,
          index: numPages,
          current: false,
        },
      ];
    }
  }
  
  return (
    <PaginationList marginBottom={marginBottom}>
      {!isFirst && (
        <Link to={prevPage}>
          <NextButton>
            <i className="ti-arrow-left"></i>
          </NextButton>
        </Link>
      )}
      {navItems.map((item, i) => (
        <PaginationList>
          {item.separator ? (
            
            <PaginationSeparator>...</PaginationSeparator>
            
          ) : (
            <PaginationItem current={currentPage === item.index} key={i} className={currentPage === item.index ? "activeItem" : ""}>
              {currentPage === item.index ? (
                <span>{item.index}</span>
              ) : (
                <Link to={item.link} activeClassName="active">{item.index}</Link>
              )}
            </PaginationItem>
          )}
        </PaginationList>
      ))}
      {!isLast && (
        <Link to={nextPage}>
          <NextButton>
            <i className="ti-arrow-right"></i>
          </NextButton>
        </Link>
      )}
    </PaginationList>
  )
}


export default Pagination


Pagination.propTypes = {
  marginBottom: PropTypes.string,
  slugPrefix: PropTypes.string
}

Pagination.defaultProps = {
  marginBottom: "0",
  slugPrefix: '/blog'
}

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom:${props => props.marginBottom};
  padding-left:0 !important;
  margin-left:0 !important;
  .activeItem {
    background-color: #2550de;
    
  }
  
`

export const PaginationItem = styled.li`
  border: 1px solid #e5e5e5;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 38px;
  text-align: center;
  color: #263a4f;
  font-weight: 600;
  border-radius: 2px;
  cursor:pointer;
  a {
    color: #263a4f;
    width:40px;
    height:40px;
    display:inline-block;
  }
  span {
    color:white;
  }
  :hover {
    background-color: #2550de;
    color: #fff;
    opacity: 1;
    text-decoration: none;
    a {
      color: #fff;
    }
  }
  :active {
    background-color: #2550de;
    border: 1px solid #2550de;
    color: #fff;
  }
  display: inline-block;
  margin: 0 5px;
  text-align: ${({ position }) => {
    if (position === "left") return "left"
    if (position === "center") return "center"
  }};
`

export const NextButton = styled.li`
width: 40px;
height: 40px;
font-weight: 400;
margin: 0 5px;
text-align: center;
border: 1px solid #e5e5e5;
text-decoration: none;
font-family:Poppins;
font-size:16px;
line-height:24px;
background-color: #fff;
border-radius: 2px;
align-items: center;
justify-content: center;
display: flex;
i {
  color: #263a4f;
  
}
`

export const PaginationSeparator = styled.li`
min-width: 19px;
min-height: 48px;
font-weight: 400;
margin:0 5px;
padding-bottom:5px;
text-align: center;
border-top: 1ps solid transparent;
text-decoration: none;
font-family: Poppins;
font-size: 22px;
letter-spacing:0.1em;
display: flex;
align-items: center;
justify-content: center;
color: rgba(35,29,48,0.6);
@media (max-width: 576px) {
  margin:0;
}
`
