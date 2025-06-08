const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html on root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
