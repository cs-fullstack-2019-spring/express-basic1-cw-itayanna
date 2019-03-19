const express = require('express');
const app = express();

// this command renders to the public directory instead of the endpoint defined

app.use(express.static('public'));


// the route that defines the index befor the comand above showes the public file in place of this

app.get('/', (req, res) => {
    res.send("I'Tayanna created a server here!!")
});

// post request now has content in it

app.post('/', (req, res) => {
    res.send("I'Tayanna got a POST request!!")
});


app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});