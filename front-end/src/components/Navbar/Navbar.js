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
// import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  // NavLogo,
  // MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  // NavBtn,
  // NavBtnLink,
} from "./NavbarElements";
import "./Navbar.css";

const Navbar = () => {
  // function handleClick(event) {
  //   event.target.classList.toggle("active");
  // }
  // document.querySelectorAll(".pages").forEach((link) => {
  //   if (link.href === window.location.href) {
  //     link.setAttribute("aria-current", "page");
  //   }
  // });

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
            <NavItem
              className="all pages"
              onClick={() => {
                document
                  .querySelectorAll(".pages")
                  .forEach((link) => link.classList.remove("selected"));
                document.querySelector(".all").classList.add("selected");
              }}
            >
              <NavLinks
                className="all selected pages"
                to="/"
                // className=isSelected("ALL RECIPES")? "pages selected" : "pages"
                // aria-current="page"
              >
                ALL RECIPES
              </NavLinks>
            </NavItem>

            <NavItem
              className="healthy pages"
              onClick={() => {
                document
                  .querySelectorAll(".pages")
                  .forEach((link) => link.classList.remove("selected"));
                document.querySelector(".healthy").classList.add("selected");
              }}
            >
              <NavLinks to="/healthy">HEALTHY</NavLinks>
            </NavItem>

            <NavItem
              className="vegan pages"
              onClick={() => {
                document
                  .querySelectorAll(".pages")
                  .forEach((link) => link.classList.remove("selected"));
                document.querySelector(".vegan").classList.add("selected");
              }}
            >
              <NavLinks to="/vegan" className="pages">
                VEGAN
              </NavLinks>
            </NavItem>
            <NavItem
              className="gluten pages"
              onClick={() => {
                document
                  .querySelectorAll(".pages")
                  .forEach((link) => link.classList.remove("selected"));
                document.querySelector(".gluten").classList.add("selected");
              }}
            >
              <NavLinks
                to="/gluten pages"
                onClick={() => {
                  document
                    .querySelectorAll(".pages")
                    .forEach((link) => link.classList.remove("selected"));
                  document.querySelector(".gluten").classList.add("selected");
                }}
                className="pages"
              >
                GLUTEN-FREE
              </NavLinks>
            </NavItem>
            <NavItem
              className="dairy pages"
              onClick={() => {
                document
                  .querySelectorAll(".pages")
                  .forEach((link) => link.classList.remove("selected"));
                document.querySelector(".dairy").classList.add("selected");
              }}
            >
              <NavLinks to="/dairy" className="pages">
                DAIRY-FREE
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
