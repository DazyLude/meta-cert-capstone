import { Link } from "react-router-dom/dist";

export default function Socials() {
  return (
    <div className="socials">
      Social Links
        <menu>
        <li>
          <Link>Link 1</Link>
        </li>
        <li>
          <Link>Link 2</Link>
        </li>
        <li>
          <Link>Link 3</Link>
        </li>
      </menu>
    </div>
  );
}