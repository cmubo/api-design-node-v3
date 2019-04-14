import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()
app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
  console.log('logging')
  res.mydata = 'hello'
  next()
}
// Could use the middleware this way or as an app.method() argument
// app.use(log)

// Sub router, this is using /api/me the /api coming from the middleware call below.
router.get('/me', (req, res) => {
  res.send({ me: 'me route' })
})

app.use('/api', router)

app.get('/data', [log, log, log], (req, res) => {
  res.send({ message: 'hello', mydata: res.mydata })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

// Probably prefer to use this way of doing things:
// app.route('/data')
//   .get()
//   .post()

// app.route('/data/:id')
//   .get()
//   .post((req, res) => {
//     res.send(req.body)
//   })
//   .put()
//   .delete()

export const start = () => {
  app.listen(3000, () => {
    console.log('Server has started on Port 3000')
  })
}
