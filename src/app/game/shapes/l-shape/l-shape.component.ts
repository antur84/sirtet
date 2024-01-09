import { Component } from '@angular/core';
import { Shape } from '../shape';

@Component({
  selector: 'app-l-shape',
  standalone: true,
  imports: [],
  templateUrl: './l-shape.component.html',
  styleUrl: './l-shape.component.scss',
  host: {
    '[style.--top]': 'top',
  },
})
export class LShapeComponent implements Shape {
  top = 0;

  tick = () => {
    console.log('lshapre', this.top);
  };

  moveDown = () => {
    this.top++;
  };
}
