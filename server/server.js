const express = require('express');
const app = express();
const PORT = 5001;
const bodyParser = require('body-parser');

const favFoods = ['Steak', 'Crab Legs', 'Pasta'];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/food', (req, res) => {
  res.send(favFoods);
});

app.post('/food', (req, res) => {
  console.log(req.body);
  const newFood = req.body.name;
  favFoods.push(newFood);
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
