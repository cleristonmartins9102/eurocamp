import { readFileSync } from 'fs'

export class HandlerFileAdapter {
  async open (filePath: string): Promise<string> {
    return readFileSync(filePath).toString()
  }
}
