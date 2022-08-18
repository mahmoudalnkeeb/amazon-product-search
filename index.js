const awsBuddy = require('amazon-buddy');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.get('/search', async (req, res) => {
  // ../search?keyword=phone&count=50&country=AE
  const products = await awsBuddy.products({
    keyword: req.query.keyword || 'home',
    number: +req.query.count || 50,
    country: req.query.country || 'AE',
  });
  res.status(200).json(products);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('app is listening');
});
