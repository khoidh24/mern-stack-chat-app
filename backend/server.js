import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import messagesRoutes from './routes/message.routes.js'
import connectMongoDB from './database/connectMongoDB.js'

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', authRoutes)
app.use('/api/messages', messagesRoutes)

app.listen(PORT, () => {
  console.log(`\nServer is running \n\nClick the link to access: \n\nhttp://localhost:${PORT} \n\n${connectMongoDB()}`)
})
