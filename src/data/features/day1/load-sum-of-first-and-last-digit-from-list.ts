export class LoadSumOfFirstAndLastDigitFromList {
  load (lines: string[]): number {
    let calc = 0
    for (const line of lines) {
      const onlyNumbers = line.split('').filter(value => /\d+/g.test(value)) ?? []
      if (onlyNumbers?.length > 0 && typeof onlyNumbers[0] !== 'undefined' && onlyNumbers[0] !== null) {
        calc = onlyNumbers.length === 1
          ? calc + parseInt(`${onlyNumbers[0] + onlyNumbers[0]}`)
          : calc + parseInt((`${onlyNumbers[0] + onlyNumbers[onlyNumbers.length - 1]}`))
      }
    }
    return calc
  }
}
