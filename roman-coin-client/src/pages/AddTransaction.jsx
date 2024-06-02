import React, { useState } from "react";
import Notification from "../components/Notification";

const AddTransaction = () => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/blockchain/add-transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sender, receiver, amount }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNotification({
          message: "Transaction added successfully",
          type: "success",
        });
        setSender("");
        setReceiver("");
        setAmount("");
      })
      .catch((error) => {
        setNotification({ message: "Transaction failed", type: "error" });
      });
  };

  return (
    <div>
      <h1>Add Transaction</h1>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="Sender"
          required
        />
        <input
          type="text"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          placeholder="Receiver"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
