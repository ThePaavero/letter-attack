const State = (state: GameState, keyIsDown: Function, canvas: HTMLCanvasElement) => {

  const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const lettersPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
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
    }
  }

  const update = (): void => {
    handleSpawningLetters()

  }

  return { update }
}

export default State
