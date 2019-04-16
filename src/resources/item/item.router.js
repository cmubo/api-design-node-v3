import { Router } from 'express'

const controller = (req, res) => {
  res.send({ message: 'hello' })
}

const router = Router()

router
  .route('/')
  .get((req, res) => {
    res.send(controller)
  })
  .post((req, res) => {
    res.send({ user: 'post user' })
  })

router
  .route('/:id')
  .get((req, res) => {
    res.send(controller)
  })
  .put((req, res) => {
    res.send(controller)
  })
  .delete((req, res) => {
    res.send(controller)
  })

// router.get('/user', (req, res) => {
//   res.send({ user: 'user' })
// })

export default router
