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
    if (state.flashing) {
      context.fillStyle = 'red'
      context.fillRect(0, 0, canvas.width, canvas.height)
    }
  }

  const draw = (): void => {
    clear()
    drawPossibleFlash()
    drawLetters()
  }

  return { draw }
}

export default Renderer
