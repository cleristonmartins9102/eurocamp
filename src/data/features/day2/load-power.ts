interface CubeCountType {
  [key: string]: number
}

export class LoadPower {
  async load (gameDatas: string[]): Promise<number> {
    let count = 0
    for (const currentGameDetails of gameDatas) {
      const [gameId, gameData] = currentGameDetails.split(': ')
      const games = gameData.split('; ')
      const gameCubeCounts: CubeCountType = {
        red: 0,
        green: 0,
        blue: 0
      }
      for (const game of games) {
        const gameCubeCount: CubeCountType = {
          red: 0,
          green: 0,
          blue: 0
        }

        for (const cube of game.split(', ')) {
          const [count, color] = cube.split(' ')
          gameCubeCount[color] += parseInt(count)
          for (const key of Object.keys(gameCubeCount)) {
            if (gameCubeCount[key] > gameCubeCounts[key]) {
              gameCubeCounts[key] = gameCubeCount[key]
            }
          }
        }
      }
      count += gameCubeCounts.red * gameCubeCounts.blue * gameCubeCounts.green
    }
    return count
  }
}
