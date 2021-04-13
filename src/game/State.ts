const State = (state: GameState, keyIsDown: Function, canvas: HTMLCanvasElement) => {

  const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const lettersPool: Array<string> = 'ABCDEFGHJKLMNPQRSTUVWXYZ'.split('')
  const minTicksBetweenSpawns: number = 1
  let ticksBetweenSpawns: number = 0

  const getRandomColor = (): string => {
    // @todo
    return '#fff'
  }

  const getNewLetter = (): Letter => {
    const key = lettersPool[randomIntFromInterval(0, lettersPool.length - 1)]
    return {
      key,
      x: randomIntFromInterval(0, canvas.width),
      y: -50,
      color: getRandomColor(),
      velocity: 2,
      size: randomIntFromInterval(20, 70),
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
      if (state.ticksBetweenSpawns <= minTicksBetweenSpawns) {
        state.ticksBetweenSpawns = minTicksBetweenSpawns
        return
      }
      state.ticksBetweenSpawns = Math.ceil(state.ticksBetweenSpawns -= (state.ticksBetweenSpawns / 30))
    }
  }

  const removeLetter = (letter: Letter): void => {
    state.letters = state.letters.filter((l: Letter) => l !== letter)
  }

  const doOnLetterHittingGround = (): void => {
    state.flashing = true
    setTimeout((): void => {
      state.flashing = false
    }, 20)
  }

  const moveLetters = (): void => {
    state.letters.forEach((letter: Letter): void => {
      letter.y += letter.velocity
      letter.velocity += (letter.velocity / 4) / 100

      if (letter.y >= canvas.height) {
        doOnLetterHittingGround()
        removeLetter(letter)
      }
    })
  }

  const update = (): void => {
    handleSpawningLetters()
    moveLetters()
  }

  return { update }
}

export default State
