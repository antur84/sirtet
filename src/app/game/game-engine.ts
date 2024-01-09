import { computed, signal } from '@angular/core';

export class GameEngine {
  private state = signal<GameState>('not-started');
  private loop: ReturnType<typeof createGameLoop>;

  startNewGame = () => {
    this.state.set('running');
    if (!this.loop) {
      this.loop = createGameLoop();
    }

    this.loop.start();
  };

  pauseGame = () => {
    this.state.set('paused');
    this.loop.stop();
  };

  resumeGame = () => {
    this.state.set('running');
    this.loop.start();
  };

  isGameState = (state: GameState) => computed(() => this.state() === state);
}

export type GameState = 'not-started' | 'running' | 'paused';

const createGameLoop = () => {
  const sixtyFramesPerSecond = 1000 / 60;

  let idOfStartedLoop: number;

  const start = () => {
    idOfStartedLoop = window.setInterval(function () {
      console.log('tick');
    }, sixtyFramesPerSecond);
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
