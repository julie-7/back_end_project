users.use(express.json())
import{ getOrder } from '../controllers/orderscontroller'

users.get('/users',getuser)

users.post('/users' ,postuser )

users.put('/users' , putuser)

users.delete('/users', deleteuser)

orders.use(express.json())
import{ getProduct } from '../controllers/Ordercontroller'

users.get('/users',getuser )

users.post('/users' ,postuser )

users.delete('/users', deleteuser)

orders.put('/order/:id',async (req,res) => {
const order_id = req.params.id 
const tmp = req.body
const arr = [tmp.name,tmp.email,]
}
)