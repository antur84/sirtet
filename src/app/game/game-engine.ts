import { computed, signal } from '@angular/core';

export class GameEngine {
  private state = signal<GameState>('not-started');
  private loop: ReturnType<typeof createGameLoop>;
  private gameTick: () => void;

  startNewGame = (gameTick: () => void) => {
    this.state.set('running');
    this.gameTick = gameTick;
    if (!this.loop) {
      this.loop = createGameLoop();
    }

    this.loop.start(gameTick);
  };

  pauseGame = () => {
    this.state.set('paused');
    this.loop.stop();
  };

  resumeGame = () => {
    this.state.set('running');
    this.loop.start(this.gameTick);
  };

  isGameState = (state: GameState) => computed(() => this.state() === state);
}

export type GameState = 'not-started' | 'running' | 'paused';

const createGameLoop = () => {
  const sixtyFramesPerSecond = 1000 / 60;

  let idOfStartedLoop: number;

  const start = (gameTick: () => void) => {
    idOfStartedLoop = window.setInterval(gameTick, sixtyFramesPerSecond);
  };

  const stop = () => {
    if (idOfStartedLoop) {
      window.clearInterval(idOfStartedLoop);
    }
  };

  return {
    start,
    stop,
  };
};
