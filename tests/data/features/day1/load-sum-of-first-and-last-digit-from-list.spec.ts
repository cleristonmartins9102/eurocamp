import { LoadSumOfFirstAndLastDigitFromList } from '../../../../src/data/features/day1/load-sum-of-first-and-last-digit-from-list'

describe('Load Sum of First and Last Letter From List', () => {
  it('should returns the correct value with multiple value by line', () => {
    const list = [
      '1adsdsds3ldsjdo9',
      'gisis3sks2sksiw7',
      'dsdff6sfgdsdwfg4',
      'dmcieie1kdkssoo9'
    ]
    const sut = new LoadSumOfFirstAndLastDigitFromList()

    const response = sut.load(list)

    expect(response).toBe(139)
  })

  it('should returns the correct value with single number and multiples caracteres by line', () => {
    const list = [
      '1adsdsds3ldsjdo9',
      'gisis3sks2sksiw7',
      'dsdff6sfgdsdwfg4',
      '1ddsffsfs'
    ]
    const sut = new LoadSumOfFirstAndLastDigitFromList()

    const response = sut.load(list)

    expect(response).toBe(131)
  })

  it('should returns the correct value with only numbers by line', () => {
    const list = [
      '1adsdsds3ldsjdo9',
      'gisis3sks2sksiw7',
      'dsdff6sfgdsdwfg4',
      '12'
    ]
    const sut = new LoadSumOfFirstAndLastDigitFromList()

    const response = sut.load(list)

    expect(response).toBe(132)
  })

  it('should returns the correct value with only numbers by line', () => {
    const list = [
      '51591twosix4dhsxvgghxq',
      '425nine',
      'llvmhjtr8nbbhrfone'
    ]
    const sut = new LoadSumOfFirstAndLastDigitFromList()

    const response = sut.load(list)

    expect(response).toBe(187)
  })
})
