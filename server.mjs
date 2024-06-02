import express from "express";
import bodyParser from "body-parser";
import blockchainRoutes from "./routes/blockchain.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/blockchain", blockchainRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
