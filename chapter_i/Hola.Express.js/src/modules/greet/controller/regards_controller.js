import { Regards } from '../model/regards.js'

export class RegardsController {
  static async getAll (req, res) {
    const regards = await Regards.findAll()
    res.json(regards)
  }

  static async post (req, res) {
    const { greet, language } = req.body
    const result = await Regards.create(greet, language)
    res.json(result)
  }
}
