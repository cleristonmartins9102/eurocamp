export class LoadSumOfFirstAndLastDigitFromList {
  load (list: string[]): number {
    let calc = 0
    for (const row of list) {
      const onlyNumbers = row.split('').filter(value => /\d+/g.test(value)) ?? []
      if (onlyNumbers?.length > 0 && typeof onlyNumbers[0] !== 'undefined' && onlyNumbers[0] !== null) {
        calc = onlyNumbers.length === 1
          ? calc + parseInt(`${onlyNumbers[0] + onlyNumbers[0]}`)
          : calc + parseInt((`${onlyNumbers[0] + onlyNumbers[onlyNumbers.length - 1]}`))
      }
    }
    return calc
  }
}
