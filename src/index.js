import React from "react";
import  ReactDOM from "react-dom/client";
import App from "./App.js"
import './index.css';
import './mediaQuery.css';
import './Animate.css';
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<div> <App /></div>,document.getElementById("root"));
