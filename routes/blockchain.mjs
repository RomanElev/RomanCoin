import { Router } from "express";
import {
  getBlockchain,
  addBlock,
  validateBlockchain,
  addTransaction,
  mineTransactions,
  consensus,
} from "../controllers/blockchain.mjs";

const router = Router();

router.get("/", getBlockchain);
router.post("/add-block", addBlock);
router.get("/validate", validateBlockchain);
router.post("/add-transaction", addTransaction);
router.post("/mine", mineTransactions);
router.post("/consensus", consensus);

export default router;
