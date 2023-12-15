//Import React
import React from "react";
//Import ReactDOM
import ReactDOM from "react-dom/client";
//Import index.css
import "./index.css";
//Import App
import App from "./App";

//Start ROOT
const root = ReactDOM.createRoot(document.getElementById("root"));
//renderizamos la vista del App y asi para las pestañas que sea
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
