// Backend: Simple Express Server
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello MERN Stack!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Frontend: React Component
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello MERN Stack!</h1>
    </div>
  );
}

export default App;
