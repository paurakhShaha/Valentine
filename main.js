const express = require('express');
const path = require('path');
const app = express();
let port = process.env.PORT || 8080;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/greet/:name', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'val.html'));
    
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
});
