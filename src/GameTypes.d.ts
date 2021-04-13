type ControlsFunctions = {
  keyIsDown: Function,
}

type BasicDebugger = {
  tick: Function,
  statsBegin: Function,
  statsEnd: Function,
}

type GameState = {
  running: boolean,
  keysDown: Array<string>,
  // Your custom state related types go here.
}
