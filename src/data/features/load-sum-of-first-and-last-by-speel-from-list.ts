type Numbers = Record<string, string>

export class LoadSumOfFirstAndLastDigitSpeelFromList {
  load (lines: string[]): number {
    let calc = 0

    for (let line of lines) {
      for (const num of Object.keys(this.getDigitMapped())) {
        const letter = this.getDigitMapped(num)
        line = line.replaceAll(num, letter as string)
      }
      const onlyNumbers = line.split('').filter(value => /\d+/g.test(value)) ?? []
      if (onlyNumbers?.length > 0 && typeof onlyNumbers[0] !== 'undefined' && onlyNumbers[0] !== null) {
        calc = onlyNumbers.length === 1
          ? calc + parseInt(`${onlyNumbers[0] + onlyNumbers[0]}`)
          : calc + parseInt((`${onlyNumbers[0] + onlyNumbers[onlyNumbers.length - 1]}`))
      }
    }
    return calc
  }

  private getDigitMapped (digit?: string): string | Numbers {
    const digitMap: Numbers = {
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9'
    }
    return typeof digit === 'undefined' ? digitMap : `${digit}${digitMap[digit]}${digit}`
  }
}
