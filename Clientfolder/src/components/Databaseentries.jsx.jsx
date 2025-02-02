import { useState, useEffect } from "react";
export default function DatabaseEntries() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    async function fetchEntries () {
        try {
            const response = await fetch ("http://localhost:8080/readroute");
            const data = await response.json();
            setEntries(data);
        } catch (error) {
            console.error("Unable to fetch entries:", error);
        }
    }
    fetchEntries();
}, []);
}

return (
    <div>
        <h1>Guestbook Entires</h1>
        <ul></ul>
    </div>
)



// return (
//     <div>
//       <h1>useEffect Demo!!!</h1>
//       <p>{message}</p>
//       <button onClick={() => setRefreshCount(refreshCount + 1)}>
//         Refetch Data ({refreshCount})
//       </button>
//       <button onClick={() => setMessage("")}>Clear Message</button>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.title}</li>
//           //every item that was fetched is going to be rendered as a list item element.
//         ))}
//       </ul>
//     </div>
//   );
// }
