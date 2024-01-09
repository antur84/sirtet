import { Component, computed, inject } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { GameAreaComponent } from 'app/game/game-area/game-area.component';
import { GameSidebarAreaComponent } from 'app/game/game-sidebar-area/game-sidebar-area.component';
import { GameService } from 'app/game/game.service';

@Component({
  selector: 'app-main-menu-page',
  standalone: true,
  imports: [ButtonComponent, GameAreaComponent, GameSidebarAreaComponent],
  templateUrl: './main-menu-page.component.html',
  styleUrl: './main-menu-page.component.scss',
})
export class MainMenuPageComponent {
  private gameService = inject(GameService);

  canStartNewGame = this.gameService.canStartNewGame;
  isGameStarted = computed(
    () => this.gameService.isGameRunning() || this.gameService.isGamePaused()
  );

  startNewGame = () => {
    this.gameService.startNewGame();
  };
}
