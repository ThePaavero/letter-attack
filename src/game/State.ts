const State = (state: GameState, keyIsDown: Function, canvas: HTMLCanvasElement) => {

  const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const lettersPool: Array<string> = 'ABCDEFGHJKLMNPQRSTUVWXYZ'.split('')
  const minTicksBetweenSpawns: number = 1
  let ticksBetweenSpawns: number = 0

  const centerPlayer = () => {
    state.player.x = canvas.width / 2 - (state.player.x / 2)
    state.player.y = canvas.height - (state.player.height + 3)
  }

  const getRandomColor = (): string => {
    // @todo
    return '#fff'
  }

  const getNewLetter = (): Letter => {
    const key = lettersPool[randomIntFromInterval(0, lettersPool.length - 1)]
    const size = randomIntFromInterval(20, 70)
    return {
      key,
      size,
      x: randomIntFromInterval(0, canvas.width - size),
      y: size * -1,
      color: getRandomColor(),
      velocity: size / 20,
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
      state.ticksBetweenSpawns = Math.ceil(state.ticksBetweenSpawns -= (state.ticksBetweenSpawns / 50))
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

  const moveProjectiles = (): void => {
    state.projectiles.forEach((projectile: Projectile): void => {
      projectile.y -= projectile.speed
      if (projectile.y < 0) {
        state.projectiles = state.projectiles.filter((p: Projectile) => p !== projectile)
        console.log('Removed projectile')
      }
    })
  }

  const shootProjectile = (key: string = ''): void => {
    state.player.canShoot = false
    const projectile = {
      key: key.toUpperCase(),
      x: state.player.x,
      y: state.player.y,
      speed: 20,
    }
    state.projectiles.push(projectile)
    setTimeout(() => {
      state.player.canShoot = true
    }, 100)
  }

  const movePlayer = (): void => {
    state.player.x += state.player.velocities.x
    state.player.y += state.player.velocities.y

    if (keyIsDown('arrowleft')) {
      state.player.x -= state.player.speed
    } else if (keyIsDown('arrowright')) {
      state.player.x += state.player.speed
    }

    if (state.player.x < 0) {
      state.player.x = 0
    } else if (state.player.x > canvas.width - state.player.width) {
      state.player.x = canvas.width - state.player.width
    }

    lettersPool.forEach((key: string): void => {
      if (keyIsDown(key.toLowerCase()) && state.player.canShoot === true) {
        shootProjectile(key)
      }
    })
  }

  const update = (): void => {
    handleSpawningLetters()
    moveLetters()
    moveProjectiles()
    movePlayer()
  }

  centerPlayer()

  return { update }
}

export default State
