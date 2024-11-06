import "../styles/style.css";
import { useState } from "react";
import Info from "./Info";
import Education from "./Education";
import Experience from "./Experience";

// eslint-disable-next-line react/prop-types
function Button({ text = "Edit", onClick, className = "edit" }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

function Parent() {
  const [activeForm, setActiveForm] = useState(null);

  const toggleForm = (formName) => {
    setActiveForm(activeForm === formName ? null : formName);
  };

  const handleSubmit = () => {
    setActiveForm(null); // Hide form upon submission
  };

  return (
    <div>
      <Button
        text="Edit Info"
        onClick={() => toggleForm("info")}
        className="editInfo"
      />
      <Button
        text="Edit Education"
        onClick={() => toggleForm("education")}
        className="editEducation"
      />
      <Button
        text="Edit Experience"
        onClick={() => toggleForm("experience")}
        className="editExperience"
      />

      <Info show={activeForm === "info"} onSubmit={handleSubmit} />
      <Education show={activeForm === "education"} onSubmit={handleSubmit} />
      <Experience show={activeForm === "experience"} onSubmit={handleSubmit} />
    </div>
  );
}

export default Parent;