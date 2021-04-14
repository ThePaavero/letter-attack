const Renderer = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, state: GameState) => {

  const clear = (): void => {
    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  const drawLetters = (): void => {
    state.letters.forEach((letter: Letter): void => {
      context.fillStyle = letter.color
      context.font = `${letter.size}px Monospace`
      context.fillText(letter.key, letter.x, letter.y)
    })
  }

  const drawProjectiles = (): void => {
    state.projectiles.forEach((projectile: Projectile): void => {
      context.fillStyle = '#fff'
      context.font = `20px Monospace`
      context.fillText(projectile.key, projectile.x, projectile.y)
    })
  }

  const drawDebris = (): void => {
    state.debrisPieces.forEach((piece: DebrisPiece): void => {
      context.fillStyle = '#fff'
      context.fillRect(piece.x, piece.y, piece.size, piece.size)
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

  const drawLives = (): void => {
    context.fillStyle = '#fff'
    context.font = `20px Monospace`
    context.fillText(`LIVES: ${state.player.lives}`, 10, 20)
    context.fillText(`POINTS: ${state.points}`, 10, 50)
  }

  const draw = (): void => {
    clear()
    drawPossibleFlash()
    drawLetters()
    drawProjectiles()
    drawDebris()
    drawPlayer()
    drawLives()
  }

  return { draw }
}

export default Renderer
