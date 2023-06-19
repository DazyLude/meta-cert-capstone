import { Link } from "react-router-dom/dist";
import { HashLink } from "react-router-hash-link";

export default function Nav(props) {
  return (
    <nav>
      {props.inFooter ? <div>Navigation</div> : null}
      <menu>
        <li>
          <HashLink smooth to="/#top">Home</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">About</HashLink>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/order">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Log&nbsp;In</Link>
        </li>
      </menu>
    </nav>
  );
}