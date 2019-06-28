function Header() {
  var rootDom = document.getElementById("root");
  var Header = document.createElement("div");
  Header.classList.add("header");
  Header.innerHTML = "Header";
  rootDom.appendChild(Header);
}

export default Header;
