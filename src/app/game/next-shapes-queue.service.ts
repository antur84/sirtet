import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { GameAsset } from './game-asset';
import { LShapeComponent } from './shapes/l-shape/l-shape.component';

@Injectable({ providedIn: 'root' })
export class NextShapesQueueService implements GameAsset {
  private viewContainerRef: ViewContainerRef;

  private queue: ((
    viewContainerRef: ViewContainerRef
  ) => ComponentRef<GameAsset>)[] = [];

  constructor() {
    // First shape comes from here.
    this.queue.push(createLShape);
  }

  registerGameArea = (viewContainerRef: ViewContainerRef) => {
    this.viewContainerRef = viewContainerRef;
  };

  tick = () => {
    console.log('nextshapequeue');

    if (!this.viewContainerRef) {
      return;
    }

    if (this.queue.length === 0) {
      return;
    }

    const next = this.queue.splice(0, 1);
    next[0](this.viewContainerRef);
  };
}

const createLShape = (viewContainerRef: ViewContainerRef) => {
  const created = viewContainerRef.createComponent(LShapeComponent, {
    index: 0,
  });
  created.changeDetectorRef.detectChanges();
  return created;
};
