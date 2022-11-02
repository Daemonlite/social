// use npm init -y to initialize projects for package.json

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {readdirSync} from "fs"

const morgan = require('morgan')
require('dotenv').config()

const app = express()

//database connection
mongoose.connect('mongodb+srv://Daemon:paakwesinunoo@camp.vsngift.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})
.then(()=>{console.log('DB CONNECTED')})
.catch((err)=>{console.log(err)})

// middlewares
app.use(express.json({limit:"5mb"}))
app.use(express.urlencoded({extended:true}))
app.use(cors())

// auto load routes
readdirSync('./routes').map((r)=>app.use('/api',require(`./routes/${r}`)))




const port = process.env.PORT || 8000
app.listen(port, () => console.log(`server is running on port ${port}`))