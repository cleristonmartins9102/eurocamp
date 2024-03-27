import { readFileSync } from 'fs'

export class HandlerFileAdapter {
  async open (filePath: string): Promise<void> {
    readFileSync(filePath)
  }
}
