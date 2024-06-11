
import express from "express" ; 
import router from "./routes/routes";
import cors from "cors" ; 
import dbConnection from "./database/db";

const app = express() ; 

const PORT = 8000 ; 

dbConnection() ; 

app.use(cors()) ; 
app.use('/', router) ; 

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})