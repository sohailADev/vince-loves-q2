import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [err, setErr] = useState("");
  const [things, setThings] = useState([]);
  useEffect(() => {
    const go = async () => {
      try {
        const res = await fetch("/api/things");
        const things = await res.json();
        setThings(things);
      } catch {
        setErr("Unable to fetch the things..");
      }
    };
    go();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {err && <p>{err}</p>}
        <ol>
          {things.map((thing, i) => (
            <li key={`thing-${i}`}>{thing.name}</li>
          ))}
        </ol>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
