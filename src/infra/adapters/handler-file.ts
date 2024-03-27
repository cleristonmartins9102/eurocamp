import { readFileSync } from 'fs'
import { type ReadFileSync } from '../../../src/domain/read-file-sync'

export class HandlerFileAdapter implements ReadFileSync {
  async open (filePath: string): Promise<string> {
    return readFileSync(filePath).toString()
  }
}
