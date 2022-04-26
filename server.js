import express from "express"
const app = express()
const PORT = 8000

app.use(express.json())

// mongo connection

import mongoClient from './src/config/db.js'
mongoClient()

app.get('/',(req,res)=>{
    const person={
        fn:"Sulav",
        ln:"Adhikari",
    }
 res.json(person)

})
// Load routers 
import taskRouter from "./src/routers/taskRouter.js"


// task api
app.use("/api/v1/task", taskRouter)

app.listen(PORT,(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(`Your server is running on port:${PORT}`)
    }
})