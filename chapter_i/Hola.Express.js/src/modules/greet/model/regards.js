import { createConnection } from 'mariadb'

const connectionString = process.env.DATABASE_URL

const connection = await createConnection(connectionString)

export class Regards {
  static async findAll () {
    return await connection.query(
      'SELECT id, greet, language FROM regards'
    )
  }

  static async create (greet, language) {
    const [{ id }] = await connection.query(
      'INSERT INTO regards (greet, language) VALUES (?, ?) returning id',
      [greet, language]
    )

    const result = await connection.query(
      'SELECT id, greet, language FROM regards where id = ?', [id]
    )

    return result[0]
  }
}
