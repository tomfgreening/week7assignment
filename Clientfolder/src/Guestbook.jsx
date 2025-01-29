import { useState } from "react";

export default function Guestbook() {
  const [username, setUsername] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
