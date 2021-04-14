const player: Player = {
  name: 'Player 1',
  x: 0,
  y: 0,
  width: 20,
  height: 20,
  color: '#fff',
  velocities: {
    x: 0,
    y: 0,
  },
}

const letters: Array<Letter> = []

export default {
  player,
  flashing: false,
  ticksBetweenSpawns: 180,
  letters,
}
