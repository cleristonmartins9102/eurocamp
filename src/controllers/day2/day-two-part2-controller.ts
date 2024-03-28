import { HandlerFileAdapter } from '../../infra/adapters/handler-file'
import path from 'path'
import { type ReadFile } from '../../domain/read-file'
import { LoadPower } from '../../../src/data/features/day2/load-power'

export class DayTwoPart2Controller {
  constructor (private readonly handlerFileAdapter: ReadFile) {}
  async handler (): Promise<number> {
    const filePath = path.join(__dirname, '../../data/day2.txt')
    const fileContent = await this.handlerFileAdapter.open(filePath)
    const loadSum = new LoadPower()
    const dataList = fileContent.split('\n')
    return loadSum.load(dataList)
  }
}

const controller = new DayTwoPart2Controller(new HandlerFileAdapter())
controller.handler().then(response => { console.log(response) }).catch(e => { console.log(e) })
