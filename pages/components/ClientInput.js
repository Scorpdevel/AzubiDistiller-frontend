import React, { useState } from "react";
import axios from "axios";

const ClientInput = props => {
  const [name, setName] = useState("");

  const postRequest = data => {
    const article = { name: data };
    axios.post("https://azubidistiller-backend.herokuapp.com/kunden", article)
    .then(response =>  {
        console.log(response);
        // props.getRequest();
    });
    setName("")
    

  }

  return (

      <div className="input__container">
        <h2>Kunde Anlegen</h2>
        <div className="input__field">
          <p className="title">ID:</p>
          <input
            type="text"
            className="field__input"
            placeholder="wird generiert"
            disabled
          />
        </div>
        <div className="input__field">
          <p className="title">Kundennummer:</p>
          <input
            type="text"
            className="field__input"
            placeholder="wird generiert"
            disabled
          />
        </div>
        <div className="input__field">
          <p className="title">Name:</p>
          <input
            className="field__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="button__container">

          <button className="client__button" onClick={() => postRequest(name)}>
            Senden
          </button>
        </div>
      </div>
  );
};

export default ClientInput;
