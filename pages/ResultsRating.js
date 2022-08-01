import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Nav from './components/Nav';
const ResultsRating = () => {
    const [kunden, setKunden] = useState([{}]);

    useEffect(() => {
      axios
        .get("https://azubidistiller-backend.herokuapp.com/rating/getAll")
        .then((data) => setKunden(data.data))
        .then((response) => console.log(response))
        .catch(err => console.log(err))
    }, []);
  return (
    <div>
        <Nav />
      <div className="table__container">
      <div className="table">
        <div className="table__row table__header">
          <div className="table__cell">ID</div>
          <div className="table__cell">Kundennummer</div>
          <div className="table__cell">Ratingverfahren</div>
          <div className="table__cell">RatingNote</div>
          <div className="table__cell">Datum</div>
        </div>
        {kunden.map((client, key) => (
          <div className="table__row" key={key}>
            <div className="table__cell">{client.id}</div>
            <div className="table__cell">{client.kundennummer}</div>
            <div className="table__cell">{client.ratingverfahren}</div>
            <div className="table__cell">{client.ratingnote}</div>
            <div className="table__cell">{client.date}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default ResultsRating