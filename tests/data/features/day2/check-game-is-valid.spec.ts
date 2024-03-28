interface CubeCountType {
  [key: string]: number
}

class CheckGameIsValid {
  async check (gameDatas: string[]): Promise<number> {
    let count = 0
    for (const currentGame of gameDatas) {
      let isValidGame = true
      const [gameId, gameData] = currentGame.split(':')
      const games = gameData.split('; ')
      for (const game of games) {
        const cubeCounts: CubeCountType = {
          red: 12,
          green: 13,
          blue: 14
        }

        for (const cube of game.split(', ')) {
          const [count, color] = cube.split(' ')
          cubeCounts[color] -= parseInt(count)
          for (const key of Object.keys(cubeCounts)) {
            if (cubeCounts[key] < 0) {
              isValidGame = false
              break
            }
          }
        }
      }
      if (isValidGame) {
        count += parseInt(gameId.split(' ')[1])
      }
    }
    return count
  }
}

describe('Check game is valid', () => {
  it('should returns the correct value', async () => {
    const gameData = [
      'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
      'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
      'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
    ]
    const sut = new CheckGameIsValid()

    const response = await sut.check(gameData)

    expect(response).toBe(8)
  })
})
