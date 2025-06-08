const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from the Home Page!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Contact route
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
