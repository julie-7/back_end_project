import pg from "pg-Promise"
import dotenv from "dotenv"
dotenv.config()

const pgc = pg()
const str = process.env.CN_STR

export const db = pgc(str)

db.connect()
.then( () => {
console.log("Success Connection")
})
.catch((err) =>{
console.log(`Error connection ${err}`)
})

Export.default = db