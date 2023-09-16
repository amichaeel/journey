const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => res.send("Hello world"));

app.listen(port, () => console.log(`Express app running on port ${port}`));
