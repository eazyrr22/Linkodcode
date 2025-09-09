import express from 'express';
import {config}from 'dotnev';
import postRouter from './routes/postRouter.js'
import imgRouter from './routes/imgRouter.js'

config()

const app = express()
const port = process.env.SERVER_PORT

app.use(express.json())
app.use(express.static())
app.use('/post',postRouter)
app.use('/images',imgRouter)



app.listen(port,()=>{console.log(`server running on port${port}`)})