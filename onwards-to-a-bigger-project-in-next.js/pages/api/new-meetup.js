import dbConn from './db-con';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const client = await dbConn();

      const db = client.db();

      const meetupsCollection = db.collection('meetups');

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({
        message: 'Meetup inserted!',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error in connection',
      });
    }
  }
}

export default handler;
