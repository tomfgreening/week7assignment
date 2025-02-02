import { useState, useEffect } from "react";
export default function DatabaseEntries() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/readroute");
  });
}

// useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/todos"
//           //fetches a list of todos from the API
//         );
//         const data = await response.json();
//         // JSON wrangle!

//         console.log("EFFECT!!!: Data fetched successfully!");
//         //console log then data is fetched

//         setItems(data);
//         setMessage(
//           `SIDE EFFECT!!!: Fetched ${data.length} items successfully!`
//         );
//       } catch (error) {
//         console.error("SIDE EFFECT!!!: Failed to fetch items!");
//         setMessage("SIDE EFFECT!!!: Failed to fetch items!");
//         // If our fetch doesnt work then we get a message in our console (a side effect) and we set the value of the message variable in state to the error message using the setMessage mutation function
//       }
//     }
//     fetchData();
//     // we need a dpendency array (its written between square brackets at the end of our useEffect and it can be empty!)
//     //dependency array tells useEffect when to run and in what way to run
//     // an empty dependency array will have useEffect run its function only one, on reder of the page/component.
//   }, [refreshCount]);
