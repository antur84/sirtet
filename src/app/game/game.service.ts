import { Injectable } from '@angular/core';
import { GameEngine } from './game-engine';

@Injectable({ providedIn: 'root' })
export class GameService {
  private engine = new GameEngine();
  canStartNewGame = this.engine.isGameState('not-started');
  isGameRunning = this.engine.isGameState('running');
  isGamePaused = this.engine.isGameState('paused');
  canPauseGame = this.isGameRunning;
  canResumeGame = this.isGamePaused;
  startNewGame = () => {
    if (!this.canStartNewGame()) {
      return;
    }

    this.engine.startNewGame();
  };

  pause = () => {
    if(!this.canPauseGame()) {
      return;
    }

    this.engine.pauseGame();
  };

  resume = () => {
    if(!this.canResumeGame()) {
      return;
    }

    this.engine.resumeGame();
  };
}
