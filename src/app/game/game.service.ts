import { Injectable, inject } from '@angular/core';
import { GameAsset } from './game-asset';
import { GameEngine } from './game-engine';
import { NextShapesQueueService } from './next-shapes-queue.service';

@Injectable({ providedIn: 'root' })
export class GameService {
  private nextShapesQueueService = inject(NextShapesQueueService);

  private gameAssets: GameAsset[] = [this.nextShapesQueueService];
  private engine = new GameEngine();

  canStartNewGame = this.engine.isGameState('not-started');
  isGameRunning = this.engine.isGameState('running');
  isGamePaused = this.engine.isGameState('paused');
  canPauseGame = this.isGameRunning;
  canResumeGame = this.isGamePaused;
  registerGameArea = this.nextShapesQueueService.registerGameArea;

  startNewGame = () => {
    if (!this.canStartNewGame()) {
      return;
    }

    this.engine.startNewGame(this.doEachGameTick);
  };

  pause = () => {
    if (!this.canPauseGame()) {
      return;
    }

    this.engine.pauseGame();
  };

  resume = () => {
    if (!this.canResumeGame()) {
      return;
    }

    this.engine.resumeGame();
  };

  private doEachGameTick = () => {
    for (const asset of this.gameAssets) {
      asset.tick();
    }
  };
}
