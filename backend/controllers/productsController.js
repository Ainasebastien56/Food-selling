const  ProductDb = require('../models/products')

exports.addProduct =((req,res)=>{
    const {name_food, price, categorie} = req.body
    const imagesrc = 'http://127.0.0.1:3000/images/'+req.file.filename
   
        ProductDb.addProduct(name_food, price,imagesrc,categorie,function(){
           res.status(200).send({message : 'produit sauvegardé'})
        })
})

exports.getProduct = ((req,res)=>{
    ProductDb.getProduct(req.params.categorie,function(results){
     
        res.status(200).send(results)
    })
})


exports.getOrders = ((req,res)=>{
    const ordersId = req.params.ordersId
    
  ProductDb.getOrders(ordersId, function(result){
  
        res.status(200).send(result)
    })


   
})