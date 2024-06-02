import React, { useEffect, useState } from "react";

const Blockchain = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    fetch("/api/blockchain")
      .then((response) => response.json())
      .then((data) => setBlocks(data));
  }, []);

  return (
    <div>
      <h1>Blockchain</h1>
      <ul>
        {blocks.map((block, index) => (
          <li key={index}>{JSON.stringify(block)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blockchain;
