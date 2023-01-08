// import React from "react";
// import "./Nav.css";
// import { Squash as Hamburger } from "hamburger-react";

// export default function Nav() {
//   return (
//     <div>
//       <Hamburger />s
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

document.querySelectorAll(".pages").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

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
              <NavLinks
                to="/"
                className="nav-links"
                // aria-current="page"
              >
                ALL RECIPES
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/healthy"
                // onClick={(event) => handleClick(event)}
                className="pages"
              >
                HEALTHY
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/vegan" className="pages">
                VEGAN
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gluten" className="pages">
                GLUTEN FREE
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="dairy" className="pages">
                DAIRY FREE
              </NavLinks>
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
