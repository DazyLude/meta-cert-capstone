import aboutImg from "./Images/restauranfood.jpg"
import "./Styles/About.css";

export default function About() {
  return (
    <section id="about">
      <h1>Little&nbsp;Lemon</h1>
      <h2>Chickago</h2>
      <h3>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
      <img src={aboutImg} alt=""/>
    </section>
  );
}