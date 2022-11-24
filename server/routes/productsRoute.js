const express = require('express');
const router = express.Router();
const fs = require('fs');
const productData = './data/products.json'

//Read
const getData = (source) => {
    const jsonData = fs.readFileSync(source)
    return JSON.parse(jsonData)   
}


router.get('/fetchProduct',async (req,res)=>{
    const jsonProductData = await getData(productData).products
    
    res.send(jsonProductData)
});




module.exports = router;  