
const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;

async function main() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("MongoDB Connected");

    const db = client.db("walletDB");
    const transactions = db.collection("transactions");

    // Insert a new transaction
    await transactions.insertOne({
      transactionId: "WT02",
      walletHolder: "Priya",
      amount: 3000,
      transactionType: "Credit"
    });
    console.log("Transaction Inserted");

    // Update WT01 transaction type to Debit
    await transactions.updateOne(
      { transactionId: "WT01" },
      { $set: { transactionType: "Debit" } }
    );
    console.log("Transaction Updated");

    // Delete WT03 transaction
    await transactions.deleteOne({
      transactionId: "WT03"
    });
    console.log("Transaction Deleted");

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
