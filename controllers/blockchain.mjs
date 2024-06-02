import Blockchain from "../models/blockchain.mjs";
const blockchain = new Blockchain();

export const getBlockchain = (req, res) => {
  res.json(blockchain.chain);
};

export const addBlock = (req, res) => {
  const { data } = req.body;
  const newBlock = blockchain.addBlock(data);
  res.json(newBlock);
};

export const validateBlockchain = (req, res) => {
  const isValid = blockchain.isChainValid();
  res.json({ valid: isValid });
};

export const addTransaction = (req, res) => {
  const { sender, receiver, amount } = req.body;
  blockchain.addTransaction(sender, receiver, amount);
  res.json({ message: "Transaction added" });
};

export const mineTransactions = (req, res) => {
  const newBlock = blockchain.minePendingTransactions();
  res.json(newBlock);
};

export const consensus = (req, res) => {
  blockchain.consensus();
  res.json({ message: "Consensus algorithm executed" });
};
