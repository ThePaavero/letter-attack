type ControlsFunctions = {
  keyIsDown: Function,
}

type BasicDebugger = {
  tick: Function,
  statsBegin: Function,
  statsEnd: Function,
}

type GameFrameInitialState = {
  running: boolean,
  keysDown: Array<string>,
}

type GameState = {
  running: boolean, // @todo DRY.
  keysDown: Array<string>, // @todo DRY.
  ticksBetweenSpawns: number,
  flashing: boolean,
  player: Player,
  letters: Array<Letter>,
  projectiles: Array<Projectile>,
  debrisPieces: Array<DebrisPiece>,
}

type Velocity = {
  x: number,
  y: number,
}

type Player = {
  name: string,
  lives: number,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string,
  velocities: Velocity,
  speed: number,
  canShoot: boolean,
}

type Letter = {
  key: string,
  x: number,
  y: number,
  color: string,
  velocity: number,
  size: number,
}

type Projectile = {
  key: string,
  x: number,
  y: number,
  speed: number,
  size: number,
}

type DebrisPiece = {
  x: number,
  y: number,
  velocities: Velocity,
  size: number,
}
