import "./Styles/Testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonials">
        <ReviewCard rating={1} author="Karen" text="couldn't reserve a table, will go to their direct competitor, the Big Orange restaurant!"/>
        <ReviewCard rating={3} author="David" text="food is nice, but mobile app can use an upgrade" />
        <ReviewCard rating={5} author="Denise" text="my favourite restaurant!"/>
    </section>
  );
}

function ReviewCard(props) {
  const name = props.author ?? "Author";
  const review = props.text ?? "Review text";
  const rating = props.rating ?? 5;
  let stars = "";

  for (let i = 0; i < rating; i++) {
    stars += "⭐";
  }

  for (let i = rating; i < 5; i++) {
    stars += "★";
  }

  return (
    <div className="review-card">
      <h6>{stars}</h6>
      <h6>{name}</h6>
      <p>{review}</p>
    </div>
  );
}