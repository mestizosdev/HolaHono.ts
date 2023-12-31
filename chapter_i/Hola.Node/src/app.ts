import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import ping from './ping/ping'
import greet from './greet/greet'
import * as dotenv from 'dotenv'

dotenv.config()

const app = new Hono()

app.use(cors())
app.use('*', prettyJSON())
app.use('*', logger())

app.route('/', ping)
app.route('/', greet)

const port = Number(process.env.PORT) || 3000

console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
