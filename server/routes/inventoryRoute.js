const express = require('express');
const router = express.Router();
const fs = require('fs');
const inventoryData = './data/inventory.json'
//Read
const getData = (dataPath) => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}
const saveData = (dataPath, data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}

router.get('/fetchInventory',async (req,res)=>{
    const jsonData =  await getData(inventoryData).inventory
    res.send(jsonData)
});

router.post('/changeProductArticles',async (req,res)=>{
    const action_type = req.body.action_type
    const target_list = req.body.target_list
    const product_units = req.body.units

    fs.readFile(inventoryData, 'utf8', (err, data) => {
        let inventory_list = JSON.parse(data).inventory
        target_list.map((target)=>{
            let inventory_idx = inventory_list.findIndex((article)=>article.art_id == target.art_id)
            if (inventory_idx !=-1){
                if(action_type=='increase'){
                    inventory_list[inventory_idx].stock = `${parseInt(inventory_list[inventory_idx].stock) + (parseInt(target.amount_of)*product_units)}`
                } else if(action_type=='decrease'){
                    inventory_list[inventory_idx].stock = `${parseInt(inventory_list[inventory_idx].stock) - (parseInt(target.amount_of)*product_units)}`
                }
            }
        })
        inventory_list = {"inventory":inventory_list }
        fs.writeFile(inventoryData, JSON.stringify(inventory_list), (err)=>{ 
            if (err) throw err;
            res.send(`inventory update success : ${action_type} product articles`);
        }); }, true);

    res.send(jsonData.inventory)
});


module.exports = router;  