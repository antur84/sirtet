import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-sidebar-area',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './game-sidebar-area.component.html',
  styleUrl: './game-sidebar-area.component.scss',
})
export class GameSidebarAreaComponent {
  private gameService = inject(GameService);
  pause = this.gameService.pause;
  resume = this.gameService.resume;
  isGameRunning = this.gameService.isGameRunning;
  isGamePaused = this.gameService.isGamePaused;
}
