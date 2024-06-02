import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blockchain from "./pages/Blockchain";
import AddTransaction from "./pages/AddTransaction";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blockchain />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
      </Routes>
    </Router>
  );
};

export default App;
