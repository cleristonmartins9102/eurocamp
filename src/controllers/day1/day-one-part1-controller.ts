import { LoadSumOfFirstAndLastDigitFromList } from 'src/data/features/day1/load-sum-of-first-and-last-digit-from-list'
import { type ReadFile } from '../../domain/read-file'
import { HandlerFileAdapter } from '../../infra/adapters/handler-file'
import path from 'path'

export class DayOnePart1Controller {
  constructor (private readonly handlerFileAdapter: ReadFile) {}
  async handler (): Promise<number> {
    const filePath = path.join(__dirname, '../data/day1.txt')
    const fileContent = await this.handlerFileAdapter.open(filePath)
    const loadSum = new LoadSumOfFirstAndLastDigitFromList()
    const dataList = fileContent.split('\n')
    return loadSum.load(dataList)
  }
}

const controller = new DayOnePart1Controller(new HandlerFileAdapter())
controller.handler().then(response => { console.log(response) }).catch(e => { console.log(e) })
