// App.js
import React, { useState, useEffect } from "react";
import NumberList from "./Components/NumberList";
import AddNumberForm from "./Components/AddNumberForm";

function App() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    fetch("http://20.244.56.144/numbers/primes")
      .then((response) => response.json())
      .then((data) => setNumbers(data))
      .catch((error) => console.error("Error fetching numbers:", error));
  }, []);

  const handleAddNumber = (newNumber) => {
    fetch("http://20.244.56.144/numbers/primes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNumber),
    })
      .then((response) => response.json())
      .then((data) => setNumbers([...numbers, data]))
      .catch((error) => console.error("Error adding number:", error));
  };

  return (
    <div className="App">
      <h1>Number Management App</h1>
      <AddNumberForm onAddNumber={handleAddNumber} />
      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;
