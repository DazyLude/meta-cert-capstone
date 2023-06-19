import Nav from "./Nav";
import logo from "./Images/Logo.svg";
import "./Styles/Header.css";

export default function Header() {
  return (
    <header id="top">
      <img src={logo} alt="logo of little lemon"/>
      <Nav />
    </header>
  );
}
