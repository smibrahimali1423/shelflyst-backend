require('dotenv').config(); // Loading environment variables from .env file

const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();

const app = express()
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json()); //Middleware to send     

app.get('/', (req, res) => {
    res.send("Hi Ibrahim")
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/bookdetails', require('./routes/bookdetails'))

app.listen(port, () => {
    console.log(`Shelflyst backend listening at port http://localhost:${port}`)
  })
