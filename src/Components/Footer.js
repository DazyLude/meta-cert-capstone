import Nav from "./Nav";
import Contacts from "./Contacts";
import Socials from "./Socials";
import logo from "./Images/Logo.svg";

export default function Footer() {
    return (
      <footer>
        <img src={logo} />
        <Nav inFooter={true}/>
        <Contacts />
        <Socials />
      </footer>
    );
  }