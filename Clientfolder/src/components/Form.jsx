import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    name: "",
    date_of_visit: "",
    comments:"",
  });

  function handleChangeFormValues(event) {
    setFormValues({
      ...
      formValues,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  
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
      type
      <button type="submit">Submit</button>
    </form>
  );
}
