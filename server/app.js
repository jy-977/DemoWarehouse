
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//Express configuration 
app.use(cors({
    origin:'http://localhost:3000/',
    credentials: true,  
    resave: true, 
    saveUninitialize: true, 
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Router import
var productsRouter = require('./routes/productsRoute');
var inventoryRouter = require('./routes/inventoryRoute');

app.get('/api',(req,res)=>{
  console.log("/",req.user);
})

app.use('/api/products',productsRouter)
app.use('/api/inventory',inventoryRouter)


let server = app.listen(port, () => console.log(`Listening on port ${port}`));
