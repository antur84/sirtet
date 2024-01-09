import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-area',
  standalone: true,
  imports: [],
  templateUrl: './game-area.component.html',
  styleUrl: './game-area.component.scss',
})
export class GameAreaComponent implements OnInit, OnDestroy {

  private gameService = inject(GameService);

  @ViewChild('shapeQueueTarget', { read: ViewContainerRef, static: true })
  shapeQueueTarget: ViewContainerRef;

  ngOnInit(): void {
    this.gameService.registerGameArea(this.shapeQueueTarget);
  }

  ngOnDestroy(): void {
    this.gameService.registerGameArea(null);
  }
}
