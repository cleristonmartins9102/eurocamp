import { type ReadFile } from '../../domain/read-file'
import { HandlerFileAdapter } from '../../infra/adapters/handler-file'
import path from 'path'
import { LoadSumOfFirstAndLastDigitSpeelFromList } from '../../data/features/day1/load-sum-of-first-and-last-by-speel-from-list'

export class DayOnePart2Controller {
  constructor (private readonly handlerFileAdapter: ReadFile) {}
  async handler (): Promise<number> {
    const filePath = path.join(__dirname, '../data/day1.txt')
    const fileContent = await this.handlerFileAdapter.open(filePath)
    const loadSum = new LoadSumOfFirstAndLastDigitSpeelFromList()
    const dataList = fileContent.split('\n')
    return loadSum.load(dataList)
  }
}

const controller = new DayOnePart2Controller(new HandlerFileAdapter())
controller.handler().then(response => { console.log(response) }).catch(e => { console.log(e) })
