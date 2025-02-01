const express = require('express')
const app = express()

app.use(express.json())
const db = require('./cn.js')

app.get('/users',(req,reg)=>{
const sql = 'select * from users'
const results = await db.default.query(sql)
res.json(results)
})

app.post('/users' , (req,res) =>{
const sql = 'insert into users(name,email) values ($1,$2)'
const 
})

app.listen(3000,()=>)