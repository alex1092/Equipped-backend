const express = require('express')
const connectDB = require('./config/db')
const app = express()

// Connect db 
connectDB()

app.get('/', (req, res) => res.send('API running'))

// Define route
app.use('/api/users', require('./routes/api/users'))
app.use('/api/products', require('./routes/api/products'))
app.use('/api/quotes', require('./routes/api/quotes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))