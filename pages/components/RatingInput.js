import React, { useState, useEffect } from "react";

import axios from "axios";

const RatingInput = props => {
  const [kunden, setKunden] = useState([{}]);
  const [knr, setKnr] = useState(999);
  const [ratingverfahren, setRatingverfahren] = useState("");
  const [ratingnote, setRatingnote] = useState(0);
  const [date, setDate] = useState(Date);

  useEffect(() => {
    axios
      .get("https://azubidistiller-backend.herokuapp.com/kunden/getAll")
      .then((data) => setKunden(data.data))
      .catch(err => console.log(err));
    //   .then((response) => console.log(response);
  }, []);

  const postRequest = (knr, ratingverfahren, ratingnote, date) => {
    const article = {
      "Kundennummer": knr,
      "Ratingverfahren": ratingverfahren,
      "Ratingnote": ratingnote,
      "date": date,
    };
    axios.post("https://azubidistiller-backend.herokuapp.com/rating", article).then((response) => {
      console.log(response);
      props.getRequest();
      setKnr(999);
      setRatingnote(999);
      setRatingverfahren("")
    });

  };

  return (
    <div className="input__container">
          <h2>Rating Anlegen</h2>
      <div className="input__field">
    
        <p className="title">Kunde:</p>
        <select
          value={knr}
          onChange={(value) => {
            setKnr(value.target.value);
          }}
          className="choose__field"
          id="kunde"
          name="kunde"
        >
          <option value={999}>Kunde auswählen</option>
          {kunden.map((client, key) => {
            return (
              <option key={key} value={client.kundennummer}>
                {client.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="input__field">
        <p className="title">Ratingverfahren:</p>
        <input
          type="text"
          className="field__input"
          value={ratingverfahren}
          onChange={(e) => setRatingverfahren(e.target.value)}
        />
      </div>
      <div className="input__field">
        <p className="title">Ratingnote:</p>
        <input
          className="field__input"
          type="number"
          value={ratingnote}
          onChange={(e) => setRatingnote(parseInt(e.target.value))}
        />
      </div>
      <div className="input__field">
        <p className="title">Datum:</p>
        <input
          className="field__input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="button__container">
        <button
          className="client__button"
          onClick={() => {postRequest(knr,ratingverfahren,ratingnote,date)} }
        >
          Senden
        </button>
      </div>
    </div>
  );
};

//
export default RatingInput;
