const Renderer = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, state: GameState) => {

  const clear = (): void => {
    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  const drawLetters = (): void => {
    state.letters.forEach((letter: Letter): void => {
      context.fillStyle = letter.color
      context.font = `${letter.size}px Arial`
      context.fillText(letter.key, letter.x, letter.y)
    })
  }

  const drawPossibleFlash = (): void => {
    if (!state.flashing) {
      return
    }
    context.fillStyle = '#351122'
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  const drawPlayer = (): void => {
    context.fillStyle = state.player.color
    context.fillRect(state.player.x, state.player.y, state.player.width, state.player.height)
  }

  const draw = (): void => {
    clear()
    drawPossibleFlash()
    drawLetters()
    drawPlayer()
  }

  return { draw }
}

export default Renderer
