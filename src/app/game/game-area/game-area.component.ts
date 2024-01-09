import { Component } from '@angular/core';
import { LShapeComponent } from '../pieces/l-shape/l-shape.component';

@Component({
  selector: 'app-game-area',
  standalone: true,
  imports: [LShapeComponent],
  templateUrl: './game-area.component.html',
  styleUrl: './game-area.component.scss'
})
export class GameAreaComponent {

}
