import { MongoClient } from 'mongodb';

async function dbConn() {
  const client = MongoClient.connect(
    'mongodb+srv://rishabhkbakshi:RishabhBakshi@cluster0.pa1wk.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  return client;
}

export default dbConn;
