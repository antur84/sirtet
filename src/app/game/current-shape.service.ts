import { Injectable, inject } from '@angular/core';
import { GameAsset } from './game-asset';
import { GameClockService } from './game-clock.service';
import { Shape } from './shapes/shape';

@Injectable({ providedIn: 'root' })
export class CurrentShapeService implements GameAsset {
  private gameClockService = inject(GameClockService);
  private current: Shape = undefined;
  private latestUpdate: number;

  getCurrentShape = () => {
    return this.current;
  };

  setCurrentShape = (shape: Shape) => {
    this.latestUpdate = this.gameClockService.now();
    this.current = shape;
  };

  tick = () => {
    if (!this.current) {
      return;
    }

    const now = this.gameClockService.now();
    if (now - this.latestUpdate > 1000) {
      this.latestUpdate = now;
      this.current.moveDown();
    }

    this.current.tick();

  };
}
