import { HandlerFileAdapter } from '../../infra/adapters/handler-file'
import path from 'path'
import { CheckGameIsValid } from '../../../src/data/features/day2/check-game-is-valid'
import { type ReadFile } from '../../domain/read-file'

export class DayTwoPart1Controller {
  constructor (private readonly handlerFileAdapter: ReadFile) {}
  async handler (): Promise<number> {
    const filePath = path.join(__dirname, '../../data/day2.txt')
    const fileContent = await this.handlerFileAdapter.open(filePath)
    const loadSum = new CheckGameIsValid()
    const dataList = fileContent.split('\n')
    return loadSum.check(dataList)
  }
}

const controller = new DayTwoPart1Controller(new HandlerFileAdapter())
controller.handler().then(response => { console.log(response) }).catch(e => { console.log(e) })
