import { LoadSumOfFirstAndLastDigitFromList } from 'src/data/features/load-sum-of-first-and-last-digit-from-list'
import { type ReadFileSync } from '../../src/domain/read-file-sync'
import { HandlerFileAdapter } from '../infra/adapters/handler-file'
import path from 'path'

export class DayOneController {
  constructor (private readonly handlerFileAdapter: ReadFileSync) {}
  async handler (): Promise<number> {
    const filePath = path.join(__dirname, '../data/day1.txt')
    const fileContent = await this.handlerFileAdapter.open(filePath)
    const loadSum = new LoadSumOfFirstAndLastDigitFromList()
    const dataList = fileContent.split('\n')
    return loadSum.load(dataList)
  }
}

const controller = new DayOneController(new HandlerFileAdapter())
controller.handler().then(response => { console.log(response) }).catch(e => { console.log(e) })
