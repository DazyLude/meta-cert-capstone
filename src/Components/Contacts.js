import { Link } from "react-router-dom/dist";

export default function Contacts() {
  return (
    <div className="contacts">
      Contacts
      <menu>
        <li>
          <Link>Adress</Link>
        </li>
        <li>
          <Link>Phone</Link>
        </li>
        <li>
          <Link>Mail</Link>
        </li>
      </menu>
    </div>
  );
}