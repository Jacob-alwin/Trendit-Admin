import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../backend/config/db.js'
import { notFound,errorHandler } from './middleware/errorMiddelware.js'
import productRoutes from '../backend/routes/producrRoutes.js'
import uploadRoutes from '../backend/routes/uploadRoutes.js'
import userRoutes from '../backend/routes/userRoutes.js'
import conversationRoutes from '../backend/routes/conversationRoutes.js'
import messageRoutes from '../backend/routes/messageRoute.js'
import agentRoutes from '../backend/routes/agentRoutes.js'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()

connectDB()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

app.get('/', (req,res) =>{
    res.send('API is running....')
} )

app.use('/api/products',productRoutes)
app.use('/api/upload',uploadRoutes)
app.use('/api/users', userRoutes)
app.use('/api/conversation', conversationRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/agent', agentRoutes)


app.use(notFound)
app.use(errorHandler)

const __dirname = path.resolve()
app.use('/upload',express.static(path.join(__dirname,'/upload')))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('server running'))


