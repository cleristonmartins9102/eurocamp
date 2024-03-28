import { type ReadFileSync } from '../domain/read-file-sync'
import { HandlerFileAdapter } from '../infra/adapters/handler-file'
import path from 'path'
import { LoadSumOfFirstAndLastDigitSpeelFromList } from '../../src/data/features/load-sum-of-first-and-last-by-speel-from-list'

export class DayTwoController {
  constructor (private readonly handlerFileAdapter: ReadFileSync) {}
  async handler (): Promise<number> {
    const filePath = path.join(__dirname, '../data/input.txt')
    const fileContent = await this.handlerFileAdapter.open(filePath)
    const loadSum = new LoadSumOfFirstAndLastDigitSpeelFromList()
    const dataList = fileContent.split('\n')
    return loadSum.load(dataList)
  }
}

const controller = new DayTwoController(new HandlerFileAdapter())
controller.handler().then(response => { console.log(response) }).catch(e => { console.log(e) })
