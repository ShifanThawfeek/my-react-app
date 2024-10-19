import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
    return <h1>Hello React Guys!</h1>;
}

// Rendering react component in react version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
     <App/>
    </React.StrictMode>
);