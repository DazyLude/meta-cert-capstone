import { Link } from "react-router-dom";
import "./Styles/Specials.css";

import bruchetta from "./Images/bruchetta.svg";

import addItem from "./Images/Basket.svg";

export default function Specials() {
  return (
    <section id="specials">
      <h1>Specials</h1>
      <Link className="button" to="/booking"><h6>Order Online</h6></Link>
      <div className="specials-container">
        <Special
          img={bruchetta}
          name={"bruchetta"}
          price={"$5.00"}
          description={"Dish description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a tellus risus. Vestibulum ante "}
        />
        <Special
          img={bruchetta}
          name={"bruchetta"}
          price={"$5.00"}
          description={"Dish description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a tellus risus. Vestibulum ante "}
        />
        <Special
          img={bruchetta}
          name={"bruchetta"}
          price={"$5.00"}
          description={"Dish description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a tellus risus. Vestibulum ante "}
        />
      </div>
    </section>
  );
}

function Special(props) {
  return (
    <div className="special-card">
      <img src={props.img} alt={props.name} />
      <h6>{props.name}</h6>
      <h6>{props.price}</h6>
      <p>{props.description}</p>
      <Link><h6>Order for delivery!</h6> <img src={addItem} alt=""></img></Link>
    </div>
    );
}