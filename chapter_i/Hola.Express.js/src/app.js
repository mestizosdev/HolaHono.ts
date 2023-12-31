import express, { json } from 'express'
import cors from 'cors'
import 'dotenv/config'
import morgan from 'morgan'
import { pingRouter } from './modules/ping/route.js'
import { regardsRouter } from './modules/greet/route.js'

const app = express()
app.use(json())
app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(pingRouter())
app.use(regardsRouter())

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
})
