import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function WriteOrder() {
  const { tableId } = useParams(); // Get table ID from URL parameters
  const [order, setOrder] = useState(""); // State for storing the order details
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // Replace <backend-ip> with the actual IP address of your backend machine
      const response = await axios.post("http://192.168.95.1:8080/api/orders", {
        tableId,
        orderDetails: order,
      });
      console.log("Order submitted successfully:", response.data);
      // Navigate to the bill generation page
      navigate(`/generate-bill/${tableId}`);
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit the order. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Write Order for Table {tableId}</h1>
      <textarea
        placeholder="Enter order details"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        style={styles.textarea}
      />
      <button onClick={handleSubmit} style={styles.button}>
        Submit Order
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  textarea: { width: "80%", height: "100px", marginBottom: "20px" },
  button: { padding: "10px 20px", fontSize: "16px", cursor: "pointer" },
};

export default WriteOrder;
