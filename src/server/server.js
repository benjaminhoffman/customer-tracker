'user strict'

const express = require('express')
const app = express()
const router = express.Router()
const axios = require('axios')
const { limitResults, formatData } = require('./utils')
const moment = require('moment')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded({ extended: true })

const port = process.env.API_PORT || 3001
const firebaseUrl =
  process.env.firebaseUrl || 'https://ben-testing.firebaseio.com/contact.json'
const { firebaseUrl2 } = require('../../secrets')

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
  console.log('GET hit')
  res.json({ message: 'API Initialized!' })
})

// TODO add async/await support
router.post('/new-patient', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  axios
    .post(firebaseUrl, req.body)
    .then(result => {
      if (result.status < 200 || result.status >= 300) throw new Error(result)
      // TODO send success message
      res.send(result.data)
    })
    .catch(e => {
      console.log(e.response.status)
      console.log(e.message)
      // TODO send some message back to the client
      // TODO send this to logger somewhere, etc....
      // console.log(e)
    })
})

router.get('/chart-data', (req, res) => {
  axios
    .get(firebaseUrl2)
    .then(result => {
      const results = limitResults('2017-01-01', moment().format(), result.data)
      const formattedData = formatData(results)
      res.send(formattedData)
    })
    .catch(e => {
      console.log('ERR', e.message)
      if (e.response.status) console.log('ERR', e.response.status)
      // TODO send something back to client
      // TODO log the error somewhere
    })
})

app.listen(port, () => {
  console.log(`api running on port ${port}`)
})
