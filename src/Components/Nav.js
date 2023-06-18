export default function Nav(props) {
  return (
    <nav>
      {props.inFooter ? "Navigation" : null}
      <menu>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Reservations</a>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Log In</a>
        </li>
      </menu>
    </nav>
  );
}