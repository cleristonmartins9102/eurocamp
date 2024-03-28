interface CubeCountType {
  [key: string]: number
}

export class CheckGameIsValid {
  async check (gameDatas: string[]): Promise<number> {
    let count = 0
    for (const currentGame of gameDatas) {
      let isValidGame = true
      const [gameId, gameData] = currentGame.split(': ')
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
