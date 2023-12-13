import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import './index.css';
import App from "./App"; // Adjust the import path based on your actual file structure
import reportWebVitals from './reportWebVitals';
import AddEventForm from "./addEventForm";
import AddUserForm from "./addUserForm";
ReactDOM.render(
    <Router>
      <Routes>
      <Route path="/add-user" element={<AddUserForm/>} />
      <Route path="/add-event" element={<AddEventForm/>} />
      <Route path="/"  element={<App />} />
    </Routes>
    </Router>,
    document.getElementById("root")
);
reportWebVitals();
