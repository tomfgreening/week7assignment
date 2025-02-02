import { useState, useEffect } from "react";
export default function DatabaseEntries() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    async function fetchEntries() {
      try {
        const response = await fetch("http://localhost:8080/readroute");
        const data = await response.json();
        setEntries(data);
      } catch (error) {
        console.error("Unable to fetch entries:", error);
      }
    }
    fetchEntries();
  }, []);

  return (
    <div>
      <h1>Guestbook Entires</h1>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <p>name={entry.name} </p>
            <p>date_of_visit={entry.date_of_visit} </p>
            <p>comments={entry.comments} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
