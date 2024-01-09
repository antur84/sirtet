import { Component } from '@angular/core';
import { getHorizontalMiddle } from 'app/game/game-settings';
import { Shape } from '../shape';

@Component({
  selector: 'app-l-shape',
  standalone: true,
  imports: [],
  templateUrl: './l-shape.component.html',
  styleUrl: './l-shape.component.scss',
  host: {
    '[style.--top]': 'top',
    '[style.--left]': 'left',
  },
})
export class LShapeComponent implements Shape {
  /**
   * Width of this component, counted in terms of game blocks width.
   * If the shape rotates, this number needs to stay in sync
   */
  width = 2;
  top = 0;
  left = getHorizontalMiddle() - Math.floor(this.width / 2);

  tick = () => {
    console.log('lshapre', this.top);
  };

  moveDown = () => {
    this.top++;
  };

  moveLeft = () => {
    this.left--;
  };

  moveRight = () => {
    this.left++;
  };

}
