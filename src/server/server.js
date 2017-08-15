'user strict'

const express = require('express')
const app = express()
const router = express.Router()
const axios = require('axios')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded({ extended: true })

const port = process.env.API_PORT || 3001

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

router.post('/new-patient', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  axios
    .post('https://ben-testing.firebaseio.com/contact.json', req.body)
    .then(result => {
      if (result.status < 200 || result.status >= 300) throw new Error(result)
      // TODO send success message
      res.send(result.data)
    })
    .catch(e => {
      console.log(e.response.status)
      console.log(e.message)
      // TODO send this to logger somewhere, etc....
      // console.log(e)
    })
  // console.log(req.body)
  // res.send(req.body.gender)
})

app.listen(port, () => {
  console.log(`api running on port ${port}`)
})

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// To prevent errors from Cross Origin Resource Sharing, we will set
// our headers to allow CORS with middleware like so:
// app.use(function(req, res, next) {
//   res.setHeader(`Access-Control-Allow-Origin`, `*`)
//   res.setHeader(`Access-Control-Allow-Credentials`, `true`)
//   res.setHeader(
//     `Access-Control-Allow-Methods`,
//     `GET,HEAD,OPTIONS,POST,PUT,DELETE`
//   )
//   res.setHeader(
//     `Access-Control-Allow-Headers`,
//     `Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers`
//   )
//   // and remove caching so we get the most recent comments
//   res.setHeader(`Cache-Control`, `no-cache`)
//   next()
// })
