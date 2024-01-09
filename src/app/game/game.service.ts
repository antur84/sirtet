import { Injectable } from '@angular/core';
import { GameEngine } from './game-engine';

@Injectable({providedIn: 'root'})
export class GameService {
  private engine = new GameEngine();
  canStartNewGame = this.engine.isGameState('not-started');
  isGameRunning = this.engine.isGameState('running');
  startNewGame = () => {
    if (!this.canStartNewGame()) {
      return;
    }

    this.engine.startNewGame();
  };
}
