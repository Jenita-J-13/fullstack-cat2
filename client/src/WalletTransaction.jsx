
import { useState, useEffect } from "react";

function WalletTransaction({ walletHolder, amount }) {
  const [balance, setBalance] = useState(amount);

  useEffect(() => {
    console.log("Digital Wallet System Loaded");
  }, []);

  return (
    <div>
      <h2>Digital Wallet Transaction</h2>

      <p>Wallet Holder: {walletHolder}</p>
      <p>Transaction Amount: ₹{balance}</p>

      <button onClick={() => setBalance(balance + 500)}>
        Add ₹500
      </button>
    </div>
  );
}

export default WalletTransaction;
