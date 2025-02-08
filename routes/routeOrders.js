orders.use(express.json())
import{ getOrder } from '../controllers/orderscontroller'

orders.get('/orders',getorder)

orders.post('/orders' ,postorder )

orders.put('/orders' , putorder)

orders.delete('/orders', deleteorder)

orders.use(express.json())
import{ getProduct } from '../controllers/Ordercontroller'

orders.get('/orders',getorder)

orders.post('/orders' ,postorder )

orders.delete('/orders', deleteorder)

orders.put('/order/:id',async (req,res) => {
const order_id = req.params.id 
const tmp = req.body
const arr = [tmp.user,tmp.store,tmp.orderdate,tmp.status]
}
)

