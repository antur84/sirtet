import { Component } from '@angular/core';
import { GameAsset } from 'app/game/game-asset';

@Component({
  selector: 'app-l-shape',
  standalone: true,
  imports: [],
  templateUrl: './l-shape.component.html',
  styleUrl: './l-shape.component.scss'
})
export class LShapeComponent implements GameAsset {
  tick = () => {
    console.log('lshapre');
  };
}
