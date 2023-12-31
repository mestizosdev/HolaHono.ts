import { Hono } from 'hono'
import { Greet, Param } from './greet.model'

const greet = new Hono()

greet.get('/regards', async (c) => c.json(
    await Greet.findAll()
))

greet.get('/greet/:id', async (c) => c.json(
    await Greet.findById(Number(c.req.param('id')))
))

greet.post('/greet', async (c) => {
    const param = await c.req.json()
    const result = await Greet.create(param as Param)
    return c.json(result , 201)
})

export default greet