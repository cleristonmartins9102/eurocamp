import { HandlerFileAdapter } from '../../src/infra/adapters/handler-file'

const readFileSpy = jest.fn().mockResolvedValue('mockedTest')

jest.mock('fs', () => {
  return {
    readFileSync: (filePath: string) => readFileSpy(filePath)
  }
})

describe('Handler File Adapter', () => {
  let sut: HandlerFileAdapter

  beforeEach(() => {
    sut = new HandlerFileAdapter()
  })

  it('should call readFile with correct value', async () => {
    await sut.open('input.txt')

    expect(readFileSpy).toHaveBeenCalled()
    expect(readFileSpy).toHaveBeenCalledWith('input.txt')
  })

  it('should readFile returns the correct file content', async () => {
    const fileContent = await sut.open('input.txt')

    expect(fileContent).toBe('mockedTest')
  })
})
