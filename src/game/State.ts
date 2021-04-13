const State = (state: GameState, keyIsDown: Function) => {

  const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const lettersPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let ticksBetweenSpawns: number = 0

  const spawnLetter = () => {
    const key = lettersPool[randomIntFromInterval(0, lettersPool.length - 1)]
    console.log(key)
  }

  const update = (): void => {
    // Update your game state.
    ticksBetweenSpawns++
    if (ticksBetweenSpawns === state.ticksBetweenSpawns) {
      spawnLetter()
      ticksBetweenSpawns = 0
    }
  }

  return { update }
}

export default State
