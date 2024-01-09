import { Injectable } from '@angular/core';
import { GameAsset } from './game-asset';

@Injectable({ providedIn: 'root' })
export class CurrentShapeService implements GameAsset {
  private current: GameAsset = undefined;

  getCurrentShape = () => {
    return this.current;
  };

  setCurrentShape = (shape: GameAsset) => {
    this.current = shape;
  };

  tick = () => {
    if (!this.current) {
      return;
    }

    this.current.tick();
  };
}
