const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pets = require('./routes/pets.js');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/pets', pets);

app.get('/', (req, res)=> {
  res.send('This is the HOMEPAGE!')
})


app.listen(3000, () => {
  console.log("listing to port 3000");
})
