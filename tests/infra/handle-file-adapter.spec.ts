import { HandlerFileAdapter } from '../../src/infra/adapters/handler-file'

const readFileSpy = jest.fn()

jest.mock('fs', () => {
  return {
    readFileSync: (filePath: string) => readFileSpy(filePath)
  }
})

describe('Handler File Adapter', () => {
  it('should call readFile with correct value', async () => {
    const sut = new HandlerFileAdapter()

    await sut.open('input.txt')

    expect(readFileSpy).toHaveBeenCalled()
    expect(readFileSpy).toHaveBeenCalledWith('input.txt')
  })
})
