function Header() {
  var rootDom = document.getElementById("root");
  var Header = document.createElement("div");
  Header.innerHTML = "Header hello";
  rootDom.appendChild(Header);
}

export default Header;
