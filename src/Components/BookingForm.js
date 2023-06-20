import { useState } from "react";

export default function BookingForm(props) {
  const [time, setTime] = useState("17:00");
  const [occasion, setOccasion] = useState("Occasion");
  const [guests, setGuests] = useState(2);

  const date = props.today;
  const setDate = props.setDate;

  const availableTimes = (props.availableTimes??[]).map(
    time => {return (<option value={time} key={time}>{time}</option>);}
  );

  const getIsFormValid = () => {
    return (
      date &&
      time &&
      guests !== 0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      "time": time,
      "date": date,
      "number of clients": guests,
      "occasion": occasion,
    }
    props.submitHandler(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Book Now</h1>
      <fieldset>
        <div className="Field">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="Field">
          <label htmlFor="time">
            Time
          </label>
          <select
            id="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          >
            {availableTimes}
          </select>
        </div>
        <div className="Field">
          <label htmlFor="guests">
            Number of guests
          </label>
          <input
            id="guests"
            value={guests}
            onChange={(e) => {setGuests(e.target.value);}}
            type="number"
            placeholder="1" min="1" max="10"
          />
        </div>
        <div className="Field">
          <label htmlFor="occasion">
            Occasion
          </label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="occasion">Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <button type="submit" disabled={!getIsFormValid()}>
          Reserve a table!
        </button>
      </fieldset>
    </form>
  );
}