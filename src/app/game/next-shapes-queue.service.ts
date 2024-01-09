import { ComponentRef, Injectable, ViewContainerRef, inject } from '@angular/core';
import { CurrentShapeService } from './current-shape.service';
import { GameAsset } from './game-asset';
import { LShapeComponent } from './shapes/l-shape/l-shape.component';

@Injectable({ providedIn: 'root' })
export class NextShapesQueueService implements GameAsset {
  private currentShapeService = inject(CurrentShapeService);
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
    // no calls to registerGameArea yet
    if (!this.viewContainerRef) {
      return;
    }

    // we already have an existing shape in play
    if(this.currentShapeService.getCurrentShape()) {
      return;
    }

    // no more shapes in queue
    if (this.queue.length === 0) {
      return;
    }

    const next = this.queue.splice(0, 1);
    const created = next[0](this.viewContainerRef);
    this.currentShapeService.setCurrentShape(created.instance);
  };
}

const createLShape = (viewContainerRef: ViewContainerRef) => {
  const created = viewContainerRef.createComponent(LShapeComponent, {
    index: 0,
  });
  return created;
};
