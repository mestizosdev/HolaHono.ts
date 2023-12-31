import { Hono } from 'hono'
import { Greeting, Param } from './greet.model'

const greet = new Hono()

greet.get('/regards', async (c) => c.json(
    await Greeting.findAll()
))

greet.post('/greet', async (c) => {
    const param = await c.req.json()
    const result = await Greeting.create(param as Param)
    return c.json(result , 201)
})

export default greet