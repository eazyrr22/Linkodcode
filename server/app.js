import express from 'express';
import { config } from 'dotenv';
import postRouter from './routes/postRouter.js'
import imgRouter from './routes/imgRouter.js'
import cors from 'cors'; 

config()

const app = express()
const port = process.env.SERVER_PORT

app.use('/',express.json())
app.use(cors())
app.use(express.static("server/db/assets"))
app.use('/post',postRouter)
app.use('/images',imgRouter)



app.listen(port,()=>{console.log(`server running on port ${port}`)})