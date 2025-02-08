const express = require('express')
const app = express()

app.use(express.json())
const db = require('./cn.js')

app.get('/users', async(req, res) => {
    const sql = 'select * from users'
    const results = await db.default.query(sql)
    res.json(results)
})

app.post('/users',async (req, res) => {

    const tmp = req.body
    const str = 'insert into users(name,email) values ($1,$2)'
    const arr = [tmp.name, tmp.email]
    const result = await db.default.query.query(sql, arr)
    res.status(200).json({ message: "user created" })
})

app.put('/user', async(req, res) => {
    const temp = req.body
    const arr = (temp.name, temp.email)
    const sql = `update user
            set  name = $1
            description = $2
            price = $3
            available=$4`
    const results = db.default.query(sql,arr)
    res.json({message:"user updated"})

})

app.delete('/users',async(req,res)=>{
    const name = req.params
    const sql = 'delete from users = $1'
    const arr = [user_name]
    const result = await db.default.query(sql,arr)
    res.json({message: "user Deleted"})
})



app.get('/products', async(req, res) => {
    const sql = 'select * from products'
    const results = await db.default.query(sql)
    res.json(results)
})

app.post('/products', async(req, res) => {

    const tmp = req.body
    const str = 'insert into products(name,description,price,available) values ($1,$2,$3,$4)'
    const arr = [tmp.name, tmp.description,tmp.price,tmp.available]
    const result = await db.default.query.query(sql, arr)
    res.status(200).json({ message: "product created" })
})

app.put('/products', async(req, res) =>{
    const temp = req.body
    const arr = (temp.name, temp.description,temp.price,temp.available)
    const sql = `update product
            set  name = $1
            description = $2
            price $3
            available $4`
    const results = db.default.query(sql,arr)
    res.json({message:"product updated"})

})

app.delete('/products',async(req,res)=>{
    const name = req.params
    const sql = 'delete from products = $1,$2,$3,$4'
    const arr = [product_name,product_description,product_price,product_available]
    const result = await db.default.query(sql,arr)
    res.json({message: "product deleted"})
})

app.get('/orders', async(req, res) => {
    const sql = 'select * from orders'
    const results = await db.default.query(sql)
    res.json(results)
})

app.post('/orders',async (req, res) => {

    const tmp = req.body
    const str = 'insert into orders(users,store,orderdate,status) values ($1,$2,$3,$4)'
    const arr = [tmp.users, tmp.store,tmp.orderdate,tmp.status]
    const result = await db.default.query.query(sql, arr)
    res.status(200).json({ message: "order created" })
})

app.put('/order', async(req, res) => {
    const temp = req.body
    const arr = (temp.user, temp.store,temp.orderdate,temp.status)
    const sql = `update order
            set user = $1
            store = $2
            orderdate = $3
            status=$4`
    const results = db.default.query(sql,arr)
    res.json({message:"order updated"})

})

app.delete('/order',async(req,res)=>{
    const name = req.params
    const sql = 'delete from orders = $1'
    const arr = [order_user,order_store,order_orderdate,order_status]
    const result = await db.default.query(sql,arr)
    res.json({message: "order Deleted"})
})



app.listen(3000, () => {

})