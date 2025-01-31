import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    name: "",
    date_of_visit: "",
    comments:"",
  });
  }

  function handleChangeFormValues(event) {
    setFormValues({
      ...
      formValues,
      [event.target.name]: event.target.value,
    });
  }

function handleSubmit(event) {
  event.preventDefault();
  fetch("http://localhost:8080/createtableEntry")
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="What is your name?"
        value={formValues.name}
        onChange={handleChangeFormValues}
      />
      <label htmlFor="date_of_visit">date of visit:</label>
      <input
      type="date"
      id="date_of_visit"
      name="date_of_visit"
      placeholder="When did you visit?"
      value={formValues.date_of_visit}
      onChange={handleChangeFormValues}
      />
      <label htmlFor="comments">comments:</label>
      <input 
      type="text"
      id="comments" 
      name="comments"
      placeholder="How was your experience?" 
      value={formValues.comments}
      onChange={handleChangeFormValues}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
  
  
}
