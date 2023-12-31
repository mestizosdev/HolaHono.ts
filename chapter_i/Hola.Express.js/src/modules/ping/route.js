import { Router } from 'express'
import { PingController } from './controller/ping_controller.js'

export const pingRouter = () => {
  const router = Router()

  router.get('/ping', PingController.get)

  return router
}
