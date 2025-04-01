import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectTable from "./components/SelectTable";
import WriteOrder from "./components/WriteOrder";
import GenerateBill from "./components/GenerateBill";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectTable />} />
        <Route path="/write-order/:tableId" element={<WriteOrder />} />
        <Route path="/generate-bill/:tableId" element={<GenerateBill />} />
      </Routes>
    </Router>
  );
}

export default App;
