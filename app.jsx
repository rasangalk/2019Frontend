import React from "react";
import { createRoot } from "react-dom/client";
import App from "./main";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("app")).render(
    <Router>
        <App />
    </Router>,
);