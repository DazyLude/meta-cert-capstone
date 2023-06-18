import Nav from "./Nav";
import logo from "./Images/Logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo}/>
      <Nav />
    </header>
  );
}
