export const getOrder = async (req,res) => {

 const sql = 'select * from orders'
const result = await db.query(sql)
res.json(result)

}

export const getOrderId = async (req , res) => {
const order_id = req.params.id
const sql = `select * from orders where order_id = ${order_id}`
const result = await db.query(sql)
res.json(result)
}