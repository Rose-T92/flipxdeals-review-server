const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('FlipX Review Server is Live!');
});

// Example POST route for Judge.me webhook (expand later)
app.post('/reviews', (req, res) => {
  console.log('Incoming Review:', req.body);
  res.status(200).send('Review received');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});