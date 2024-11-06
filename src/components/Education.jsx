import { useState } from "react";
import "../styles/style.css";

// eslint-disable-next-line react/prop-types
function Education({ show, onSubmit }) {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [graduation, setGraduation] = useState("");

  return (
    <div>
      {show && (
        <form
          className="educationForm"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(); // Call onSubmit to hide the form
          }}
        >
          <label htmlFor="school">School: </label>
          <input
            type="text"
            id="school"
            value={school}
            onChange={(event) => setSchool(event.target.value)}
          />
          <label htmlFor="major">Major: </label>
          <input
            type="text"
            id="major"
            value={major}
            onChange={(event) => setMajor(event.target.value)}
          />
          <label htmlFor="graduation">Graduation Date: </label>
          <input
            type="date"
            id="graduation"
            value={graduation}
            onChange={(event) => setGraduation(event.target.value)}
          />
          <button className="submit" type="submit">
            Submit
          </button>{" "}
        </form>
      )}
      {!show && (
        <div className="educationSection">
          <h2>Education</h2>
          <p>School: {school}</p>
          <p>Major: {major}</p>
          <p>Graduation Date: {graduation}</p>
        </div>
      )}
    </div>
  );
}

export default Education;
