import React from "react";
import { add } from "../util/util";

function Footer() {
  add(2, 3);

  // var rootDom = document.getElementById("root");
  // var Footer = document.createElement("div");
  // Footer.setAttribute("id", "footer");
  // Footer.innerHTML = "Footer 33";
  // rootDom.appendChild(Footer);

  return <div className="footer">Footer</div>;
}

export default Footer;
