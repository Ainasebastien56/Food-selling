const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/router')
const app = express()

app.use(express.static('./public'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/products',router)

const PORT = 3000


app.listen(PORT,()=>console.log(`server running on port ${PORT} `))