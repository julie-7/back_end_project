import express from 'express'
export const products = express()
products.use(express.json())
import{ getProduct } from '../controllers/productcontroller'

products.get('/products',getProduct )

products.post('/products' ,postproduct )

products.put('/products' , putproduct)

products.delete('/products', deleteproduct)

products.use(express.json())
import{ getProduct } from '../controllers/productcontroller'

products.get('/products',getProduct )

products.post('/products' ,postproduct )

products.delete('/products', deleteproduct)

products.put('/products/:id',async (req,res) => {
const products_id = req.params.id  
const tmp = req.body
const arr = [tmp.name,tmp.description,tmp.price,tmp.available]
}
)