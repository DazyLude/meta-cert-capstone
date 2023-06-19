import { Link } from "react-router-dom";
import heroImg from "./Images/restauranfood.jpg"
import "./Styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      <h1>Little&nbsp;Lemon</h1>
      <h2>Chickago</h2>
      <h3>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
      <Link className="button" to="/booking"><h6>Reserve a Table</h6></Link>
      <img src={heroImg} alt="four delicious bruchettes"/>
    </section>
  );
}