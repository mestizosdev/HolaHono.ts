import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import ping from './ping/ping'
import greet from './greet/greet'

const app = new Hono()

app.use(cors())
app.use('*', prettyJSON())
app.use('*', logger())

app.route('/', ping)
app.route('/', greet)

const port = process.env.PORT || 3001

export default {
  port,
  fetch: app.fetch,
}