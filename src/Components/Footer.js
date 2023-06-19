import Nav from "./Nav";
import Contacts from "./Contacts";
import Socials from "./Socials";
import logo from "./Images/Logo.svg";
import "./Styles/Footer.css";

export default function Footer() {
    return (
      <footer>
        <img src={logo} alt="logo of little lemon"/>
        <Nav inFooter={true}/>
        <Contacts />
        <Socials />
      </footer>
    );
  }