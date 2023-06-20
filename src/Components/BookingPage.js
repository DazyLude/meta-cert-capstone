import { useEffect, useState, useReducer } from "react";
import BookingForm from "./BookingForm";

import {fetchAPI, submitAPI} from "./api";
import { useNavigate } from "react-router-dom";

function initializeTimes(date) {
  return fetchAPI(date);
}

function updateTimes(state, newDate) {
  return initializeTimes(new Date(newDate));
}

export default function BookingPage() {
  const [date, setDate] = useState("2023-06-24");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(date);
  }, [date])

  let data = {};

  const submitForm = (formData) => {
    data = formData;
    setSubmitted(true);
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (submitted && submitAPI(data)) {
      navigate("/booking-confirmation");
    }
  }, [submitted])


  const [availableTimes, dispatch] = useReducer(updateTimes, updateTimes("2023-06-24"));

  return (
    <BookingForm availableTimes={availableTimes} today={date} setDate={setDate} submitHandler={submitForm}/>
  );
}

