import { LoadSumOfFirstAndLastDigitSpeelFromList } from '../../../../src/data/features/load-sum-of-first-and-last-by-speel-from-list'

describe('Load Sum of First and Last Number By Speel From List', () => {
  it('should returns the correct value with multiple value by line', () => {
    const list = [
      'oneskdsdfthree',
      'dksksfivesix',
      'onetwo'
    ]
    const sut = new LoadSumOfFirstAndLastDigitSpeelFromList()

    const response = sut.load(list)

    expect(response).toBe(81)
  })

  it('should returns the correct value with single number and multiples caracteres by line', () => {
    const list = [
      'oneadsdsdsthreeldsjdnine',
      'gisisthreeskstwosksiwseven',
      'dsdffsixsfgdsdwfgfour',
      'oneddsffsfs'
    ]
    const sut = new LoadSumOfFirstAndLastDigitSpeelFromList()

    const response = sut.load(list)

    expect(response).toBe(131)
  })

  it('should returns the correct value with only numbers by line', () => {
    const list = [
      'oneadsdsdsthreeldsjdonine',
      'gisisthreeskstwosksiwseven',
      'dsdffsixsfgdsdwfgfour',
      'onetwo'
    ]
    const sut = new LoadSumOfFirstAndLastDigitSpeelFromList()

    const response = sut.load(list)

    expect(response).toBe(132)
  })

  it('should returns the correct value with mixed types by line', () => {
    const list = [
      'onefivenineonefourdhsxvgghxq',
      'fourtwo5nine',
      'llvmhjtreightnbbhrfone'
    ]
    const sut = new LoadSumOfFirstAndLastDigitSpeelFromList()

    const response = sut.load(list)

    expect(response).toBe(144)
  })

  it('should returns the correct value with only numbers by line', () => {
    const list = [
      '51591twosix4dhsxvgghxq',
      '425nine',
      'llvmhjtr8nbbhrfone',
      'lpbjvpbtdfvtxtdvkpjs7qrvddkzmjtlqtg',
      '3sixnineseven',
      'rfmsqbkms7three',
      '33291six',
      'oneonevstpxxrjpnine7six',
      '75sevennine14mzqljsjfbb7two',
      'three6two9jckvk',
      'zprj8394threehczfkncntk',
      'mkqtlrzmzfsix2ccqsnnxtwo4sevenxp9',
      'tdszrfzspthree2ttzseven5seven',
      'two3fiveckrsjr',
      'four14three7',
      '4fdkcclmxmxsevenfiver',
      '5sjnnfivefourzxxfpfivenine7five',
      '77sixfive'
    ]
    const sut = new LoadSumOfFirstAndLastDigitSpeelFromList()

    const response = sut.load(list)

    expect(response).toBe(970)
  })
})
