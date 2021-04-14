const player: Player = {
  name: 'Player 1',
  lives: 3,
  x: 0,
  y: 0,
  width: 20,
  height: 20,
  color: '#fff',
  speed: 10,
  velocities: {
    x: 0,
    y: 0,
  },
  canShoot: true,
}

const letters: Array<Letter> = []
const projectiles: Array<Projectile> = []
const debrisPieces: Array<DebrisPiece> = []

export default {
  timeElapsed: 0,
  debrisPieces,
  projectiles,
  player,
  flashing: false,
  ticksBetweenSpawns: 180,
  letters,
}
