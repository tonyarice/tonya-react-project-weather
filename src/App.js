import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <footer>
        This project was coded by Tonya Rice and is {" "}
      <a href="https://github.com/tonyarice/tonya-react-project-weather" target="blank" rel="noreferrer">open-sourced on GitHub</a>.
      </footer>
    </div>
    </div>
  );
}


