import { useState } from "react";
import "../styles/style.css";

// eslint-disable-next-line react/prop-types
function Experience({ show, onSubmit }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  return (
    <div>
      {show && (
        <form
          className="experienceForm"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(); // Call onSubmit to hide the form
          }}
        >
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          />
          <label htmlFor="responsibilities">Responsibilities: </label>
          <input
            type="text"
            id="responsibilities"
            value={responsibilities}
            onChange={(event) => setResponsibilities(event.target.value)}
          />
          <label htmlFor="dateFrom">Start Date: </label>
          <input
            type="date"
            id="dateFrom"
            value={dateFrom}
            onChange={(event) => setDateFrom(event.target.value)}
          />
          <label htmlFor="dateTo">End Date: </label>
          <input
            type="date"
            id="dateTo"
            value={dateTo}
            onChange={(event) => setDateTo(event.target.value)}
          />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      )}
      {!show && (
        <div className="experienceSection">
          <h2>Experience</h2>
          <p>Company: {company}</p>
          <p>Position: {position}</p>
          <p>Responsibilities: {responsibilities}</p>
          <p>
            From: {dateFrom} - To: {dateTo}
          </p>
        </div>
      )}
    </div>
  );
}

export default Experience;
