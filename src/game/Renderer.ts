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

  const draw = (): void => {
    clear()
    drawLetters()
  }

  return { draw }
}

export default Renderer
