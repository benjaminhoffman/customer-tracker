'user strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const port = process.env.API_PORT || 3001
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// To prevent errors from Cross Origin Resource Sharing, we will set
// our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader(`Access-Control-Allow-Origin`, `*`)
  res.setHeader(`Access-Control-Allow-Credentials`, `true`)
  res.setHeader(
    `Access-Control-Allow-Methods`,
    `GET,HEAD,OPTIONS,POST,PUT,DELETE`
  )
  res.setHeader(
    `Access-Control-Allow-Headers`,
    `Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers`
  )
  // and remove cacheing so we get the most recent comments
  res.setHeader(`Cache-Control`, `no-cache`)
  next()
})

app.use('/api', router)

router.get('/', (req, res) => {
  res.send('API Initialized!!')
})

// let db = '';
MongoClient.connect(
  'mongodb://test:test@ds053164.mlab.com:53164/customer-tracker',
  (err, database) => {
    if (err) return console.log(err)
    // db = database;
    app.listen(port, () => {
      console.log(`Listening at ${port}!`)
    })
  }
)
