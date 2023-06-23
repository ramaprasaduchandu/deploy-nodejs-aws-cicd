const express = require('express');
const app = express();
const {PORT = 3000} = process.env;

console.log('PORT', PORT)

app.get('/', (req, res) => res.send('Hello aws developers '))

app.listen(PORT, () => 
   console.log(`Example app listening at http://localhost:${PORT}`))
