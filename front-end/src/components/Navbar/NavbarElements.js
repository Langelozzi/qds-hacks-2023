import styled from "styled-components";

// React Router Dom might not need to be imported here
import { Link as linkR } from "react-router-dom";
// import { Link as linkS } from "react-scroll";

export const Nav = styled.nav`
  background: #273262;
  height: 80px;
  // margin-top: -80px;
  // display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  // position: sticky;
width: 100%;
  position: fixed;
  // position: -webkit-sticky;
  // top: 0;
  top: 0;
  z-index: 800;
  

  // @media screen and (max-width: 960px) {
  //   transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  // z-index: 1;
  // width: 80%;
  margin-top: auto;
  margin-bottom: auto;
  // padding: 0 24px;
  // max-width: 1100px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 1%;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    // display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

//links to other pages on the site by scrolling
//change this to linkR or change coolour on click
export const NavLinks = styled(linkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  border-bottom: 3px solid transparent;

  &:hover {
    color: #f9de99;

    border-bottom: 3px solid #f9de99;
  }
  // // add css to the active link by aria current
  // &.active {
  //   border-bottom: 3px solid #f9de99;
  // }
`;

// might not need
// export const NavLogo = styled(linkR)`
//   color: #fff;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;
// `;

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     cursor: pointer;
//     color: #fff;
//   }
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(linkR)`
//   border-radius: 50px;
//   background: #01bf71;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `;
