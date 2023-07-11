import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
const port = process.env.PORT || 5000

connectDB() // connect to MongoDB

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound) // this will be executed if no route is matched
app.use(errorHandler) // this will be executed if there is an error

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
