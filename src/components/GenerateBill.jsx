import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function GenerateBill() {
  const { tableId } = useParams();
  const [bill, setBill] = useState(null);

  useEffect(() => {
    const fetchBill = async () => {
      const response = await axios.get(`http://localhost:8080/api/bill/${tableId}`);
      setBill(response.data);
    };
    fetchBill();
  }, [tableId]);

  return (
    <div style={styles.container}>
      <h1>Bill for Table {tableId}</h1>
      {bill ? (
        <div>
          <p>Order Details: {bill.order}</p>
          <p>Total Amount: ${bill.total}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
};

export default GenerateBill;
