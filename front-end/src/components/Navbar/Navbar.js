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
import { Link } from "react-router-dom";
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
import "./Navbar.css";

const Navbar = () => {
  function handleClick(event) {
    event.target.classList.toggle("active");
  }

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <Link to="/">
            <img
              style={{
                width: "auto",
                height: "80px",
                padding: "10px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "1%",
              }}
              src={require("../../logo.png")}
              alt="recipe"
            />
          </Link>

          {/* <NavLogo to="/">reci.py</NavLogo> */}
          {/* <MobileIcon>
            <FaBars />
          </MobileIcon> */}
          <NavMenu>
            <NavItem>
              <NavLinks to="about">ALL RECIPES</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/healthy" onClick={(event) => handleClick(event)}>
                HEALTHY
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">CHEAP</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">POPULAR</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">VEGAN</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">VEGETARIAN</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">GLUTEN FREE</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">DAIRY FREE</NavLinks>
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
