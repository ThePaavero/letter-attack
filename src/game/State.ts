const State = (state: GameState, keyIsDown: Function, canvas: HTMLCanvasElement) => {

  const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const lettersPool: Array<string> = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let ticksBetweenSpawns: number = 0

  const getRandomColor = (): string => {
    return '#todo'
  }

  const getNewLetter = (): Letter => {
    const key = lettersPool[randomIntFromInterval(0, lettersPool.length - 1)]
    return {
      key,
      x: randomIntFromInterval(0, canvas.width),
      y: -50,
      color: getRandomColor(),
      velocity: 2,
    }
  }

  const spawnLetter = (): void => {
    state.letters.push(getNewLetter())
  }

  const handleSpawningLetters = (): void => {
    ticksBetweenSpawns++
    if (ticksBetweenSpawns === state.ticksBetweenSpawns) {
      spawnLetter()
      ticksBetweenSpawns = 0
      state.ticksBetweenSpawns = Math.ceil(state.ticksBetweenSpawns -= 10)
    }
  }

  const moveLetters = (): void => {
    state.letters.forEach((letter: Letter): void => {
      letter.y += letter.velocity
      letter.velocity += (letter.velocity / 4) / 100
    })
  }

  const update = (): void => {
    handleSpawningLetters()
    moveLetters()
  }

  return { update }
}

export default State
