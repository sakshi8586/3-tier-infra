const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from 3-Tier Application!');
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
