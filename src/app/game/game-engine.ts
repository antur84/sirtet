import { computed, signal } from '@angular/core';

export class GameEngine {
  private state = signal<GameState>('not-started');

  startNewGame = () => {
    this.state.set('running');
  };

  isGameState = (state: GameState) => computed(() => this.state() === state);
}

export type GameState = 'not-started' | 'running';
