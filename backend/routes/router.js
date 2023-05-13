const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null,'./public/images')
    },

    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})                                                                                                                                                    
const upload  = multer({storage: storage}) 

router.post('/addproduct',upload.single('image'),productsController.addProduct)
router.get('/getProduct:categorie',productsController.getProduct)
router.get('/getOrders/:ordersId',productsController.getOrders)


module.exports = router