import { readFileSync } from 'fs'
import { type ReadFileSync } from '../../domain/read-file'

export class HandlerFileAdapter implements ReadFileSync {
  async open (filePath: string): Promise<string> {
    return readFileSync(filePath).toString()
  }
}
