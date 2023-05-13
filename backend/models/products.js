const mysql = require('mysql')

let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password:'',
    database :'fooddata'
})

connection.connect()

class ProductDb {
    static addProduct(name_food, price, imagesrc, categorie,cb){

        connection.query('INSERT INTO foods SET name_food =?, price = ?,imagesrc=?, categorie = ?',[name_food, price,imagesrc, categorie],(err,result)=>{
            if(err){
                throw err
            }
            cb(result)
        })
    }

    static getProduct(categorie, cb){

        connection.query('SELECT * FROM foods WHERE categorie =?',[categorie],(err,results)=>{
            if (err) throw err

            cb(results)
        })
    }
    static getOrders(ordersId, cb){
        const query = `SELECT * FROM foods WHERE id_food IN (${ordersId})`
       connection.query(query,(err,results)=>{
        if (err) throw err
        cb(results)
       })
    }

}
module.exports = ProductDb