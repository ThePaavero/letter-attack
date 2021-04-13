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
  player: Player,
  letters: Array<Letter>,
  ticksBetweenSpawns: number,
}

type Player = {
  name: string,
  x: number,
  y: number,
  width: number,
  height: number,
}

type Letter = {
  key: string,
  x: number,
  y: number,
  color: string,
  velocity: number,
  size: number,
}
