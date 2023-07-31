const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let numbers = [1, 2, 3, 57, 8, 9, 11, 13];

app.get('/numbers/primes', (req, res) => {
  res.json(numbers);
});

app.post('/numbers/primes', (req, res) => {
  const newNumber = req.body.number; 
  numbers.push(newNumber);
  res.status(201).json(newNumber);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
