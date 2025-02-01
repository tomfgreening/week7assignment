import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    guestName: "",
    date_of_visit: "",
    comments: "",
  });

  function handleChangeFormValues(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The data has been sent successfully");
    // line 19 is a debugging step. I can see the above message in the console when I click submit on the client form.
    fetch("http://localhost:8080/createtableEntry", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guestName">name:</label>
      <input
        type="text"
        id="guestName"
        name="guestName"
        placeholder="What is your name?"
        value={formValues.guestName}
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
