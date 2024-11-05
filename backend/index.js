const express = require('express');
const cors = require('cors');
const Pexels = require('pexels'); // Assuming you use the `pexels` library

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  const query = req.query.query;
  const page = req.query.page;
  const per_page = req.query.perpage;
  // if (!query) {
  //   return res.status(400).send('Missing search query parameter');
  // }
  try {
    const client = await Pexels.createClient('q5FB8ipXNh6Xzf3bTsr01ZYcUE4SYf494X7fU2nN9J1qUk8N2RZR22Sz');
    const response = await client.photos.search({query,page,per_page});
    res.send(response.photos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }

});

app.listen(3000, () => {
  console.log('respoonse');
});
