import { readFileSync } from 'fs'
import { type ReadFile } from '../../domain/read-file'

export class HandlerFileAdapter implements ReadFile {
  async open (filePath: string): Promise<string> {
    return readFileSync(filePath).toString()
  }
}
