import { Component } from '@angular/core';
import { GameAsset } from 'app/game/game-asset';

@Component({
  selector: 'app-l-shape',
  standalone: true,
  imports: [],
  templateUrl: './l-shape.component.html',
  styleUrl: './l-shape.component.scss',
})
export class LShapeComponent implements GameAsset {
  priuvate
  tick = () => {
    console.log('lshapre');
  };

  move = ({ x, y }: { x: number; y: number }) => {
    console.log('move', x, y);
  };
}
