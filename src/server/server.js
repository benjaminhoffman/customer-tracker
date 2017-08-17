'user strict'

const express = require('express')
const app = express()
const router = express.Router()
const port = process.env.API_PORT || 3001

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded({ extended: true })

const axios = require('axios')
const moment = require('moment')
const get = require('lodash.get')

const { limitResults, formatData } = require('./utils')
const firebaseUrl = require('../../config')

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

// TODO add async/await support
router.post('/new-patient', jsonParser, (req, res) => {
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

router.get('/chart-data', (req, res) => {
  axios
    .get(firebaseUrl)
    .then(result => {
      const results = limitResults('2017-01-01', moment().format(), result.data)
      const formattedData = formatData(results)
      res.send(formattedData)
    })
    .catch(e => {
      console.log(get(e, 'response.status'), e.message)
      // TODO log err and send to sentry
    })
})

app.listen(port, () => {
  console.log(`api running on port ${port}`)
})
