// node/express deps, env vars, etc
const express = require('express')
const app = express()
const router = express.Router()
const port = process.env.API_PORT || 3001
const path = require('path')
require('dotenv').config()
const firebaseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.FIREBASE_URL
    : 'https://ben-testing.firebaseio.com/contact.json'

// middleware
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded({ extended: true })

// 3dp deps
const axios = require('axios')
const moment = require('moment')
const get = require('lodash.get')

// data / other
const { limitResults, formatData } = require('./utils')
const { fakeData } = require('./CONSTANTS')

// set headers to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use('/api', router)

router.get('/', (req, res) => {
  res.json({ message: 'API Initialized!' })
})

// route for adding a new entry
// TODO add async/await support
router.post('/new-entry', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)

  axios
    .post(firebaseUrl, req.body)
    .then(result => {
      if (result.status < 200 || result.status >= 300) throw new Error(result)
      res.send(result.data)
    })
    .catch(e => {
      console.log(get(e, 'response.status'), e.message)
      // TODO log err and send to sentry
    })
})

// route returns firebase data for our charts
router.get('/chart-data', (req, res) => {
  // for demo purposes, check env var
  process.env.NODE_ENV !== 'production'
    ? res.send(fakeData)
    : axios
        .get(firebaseUrl)
        .then(result => {
          const today = moment()
            .format()
            .slice(0, 10)
          const limitedResults = limitResults('2017-01-01', today, result.data)
          const formattedData = formatData(limitedResults)
          res.send(formattedData)
        })
        .catch(e => {
          console.log(get(e, 'response.status'), e.message)
          // TODO log err and send to sentry
        })
})

// fallback
router.get('/*', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`api running on port ${port}`)
})
