import { RegardsController } from './controller/regards_controller.js'
import { Router } from 'express'

export const regardsRouter = () => {
  const router = Router()

  router.get('/regards', RegardsController.getAll)
  router.post('/greet', RegardsController.post)

  return router
}
