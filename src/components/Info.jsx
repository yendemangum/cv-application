import { useState } from "react";
import "../styles/style.css";

// eslint-disable-next-line react/prop-types
function Info({ show, onSubmit }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      {show && (
        <form
          className="infoForm"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(); // Call onSubmit to hide the form
          }}
        >
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="phone">Phone Number: </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="submit" type="submit">
            Submit
          </button>{" "}
        </form>
      )}

      {!show && (
        <div className="infoSection">
          <h1>{name || "Your Name"}</h1>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}

export default Info;
