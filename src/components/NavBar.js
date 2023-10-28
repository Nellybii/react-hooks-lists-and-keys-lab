import React from "react";
import Home from "./Home"
import About from "./About";
function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}
        {links.map((link, index) => (
        <a key={index} href={`#${link.toLowerCase()}`}>
          {link.toLowerCase()}
        </a>
      ))}

  </nav>;
}

export default NavBar;
