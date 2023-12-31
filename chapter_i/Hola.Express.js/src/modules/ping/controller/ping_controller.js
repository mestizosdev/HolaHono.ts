export class PingController {
  static async get (req, res) {
    res.status(200).json(
      {
        message: 'pong'
      }
    )
  }
}
