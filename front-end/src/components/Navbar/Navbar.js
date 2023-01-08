// import React from "react";
// import "./Nav.css";
// import { Squash as Hamburger } from "hamburger-react";

// export default function Nav() {
//   return (
//     <div>
//       <Hamburger />
//     </div>
//   );
// }

import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <img
            style={{ width: "auto", height: "auto" }}
            src={require("../../logo.png")}
            alt="recipe"
            to="/"
          />

          {/* <NavLogo to="/">reci.py</NavLogo> */}
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">All Recipes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Healthy</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Cheap</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Popular</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Vegan</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Vegetarian</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Gluten Free</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Dairy Free</NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/signin">Test</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
