const DBCONF = require("./databaseConfig");

const { MongoClient } = require("mongodb");

module.exports = async function getAllProducts() {
  let allSpots;
  try {
    const client = await MongoClient.connect(DBCONF.url);
    const db = client.db(DBCONF.dbName);
    const collection = db.collection(DBCONF.spotsColl);
    allSpots = await collection.find().toArray();
  } catch (error) {
    throw error.stack;
  }
  return allSpots;
};
