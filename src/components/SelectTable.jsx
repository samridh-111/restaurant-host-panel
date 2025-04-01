import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectTable() {
  const [tableNumber, setTableNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (tableNumber) {
      navigate(`/write-order/${tableNumber}`);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Select Table</h1>
      <input
        type="number"
        placeholder="Enter Table Number"
        value={tableNumber}
        onChange={(e) => setTableNumber(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSubmit} style={styles.button}>
        Proceed
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  input: { padding: "10px", fontSize: "16px", marginBottom: "20px" },
  button: { padding: "10px 20px", fontSize: "16px", cursor: "pointer" },
};

export default SelectTable;
