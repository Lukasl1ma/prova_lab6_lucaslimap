const express = require('express')
const customerRoute = require('./src/router/customer.router')
const productRoute = require('../src/router/product.router')
const orderedRoute = require('./src/router/ordered.router')

const app = express()
app.use(express.json())
app.use('/customers', customerRoute)
app.use('/products', productRoute)
app.use('/ordered', orderedRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = 8087

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})