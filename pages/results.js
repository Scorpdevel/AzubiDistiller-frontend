import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/header";

const results = (props) => {
  const [kunden, setKunden] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/kunden/getAll")
      .then((data) => setKunden(data.data))
      .then((response) => console.log(response));
  }, []);

  return (
    <div>
      <Header />
      <div className="table__container">
      <div className="table">
        <div className="table__row table__header">
          <div className="table__cell">ID</div>
          <div className="table__cell">Kundennummer</div>
          <div className="table__cell">Name</div>
        </div>
        {kunden.map((client, key) => (
          <div className="table__row" key={key}>
            <div className="table__cell">{client.kid}</div>
            <div className="table__cell">{client.kundennummer}</div>
            <div className="table__cell">{client.name}</div>
          </div>
        ))}
      </div>
      </div>
      {/* <div>
        <table>
          <thead>
            <th scope="col">ID</th>
            <th scope="col">Kundennummer</th>
            <th scope="col">Name</th>
          </thead>
          <tbody>
          {kunden.map((client, key) => (
    
              <tr key={key}>
                <td >{client.kid}</td>
                <td>{client.kundennummer}</td>
                <td>{client.name}</td>
              </tr>

          ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default results;