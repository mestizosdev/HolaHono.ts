import { createConnection, Connection } from 'mariadb'
import * as dotenv from 'dotenv'

dotenv.config()

export type Param = {
  greet: string
  language: string
}

const connectionString: string = process.env.DATABASE_URL || ''
let connection: Connection;

async function connectToDatabase(): Promise<void> {
    connection = await createConnection(connectionString)
}

connectToDatabase()

export class Greet {

  static async findAll () {
    return await connection.query(
      'SELECT id, greet, language FROM regards'
    )
  }

  static async findById (id: number) {
    const result = await connection.query(
      'SELECT id, greet, language FROM regards where id = ?', [id]
    )

    return result[0]
  }

  static async create (param: Param) {
    const [{ id }] = await connection.query(
      'INSERT INTO regards (greet, language) VALUES (?, ?) returning id',
      [param.greet, param.language]
    )

    const result = await connection.query(
      'SELECT id, greet, language FROM regards where id = ?', [id]
    )

    return result[0]
  }
}
