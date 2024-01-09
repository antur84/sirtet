import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { GameService } from 'app/game/game.service';

@Component({
  selector: 'app-main-menu-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './main-menu-page.component.html',
  styleUrl: './main-menu-page.component.scss',
  providers: [GameService]
})
export class MainMenuPageComponent {
  private gameService = inject(GameService)

  canStartNewGame = this.gameService.canStartNewGame;
  isGameRunning = this.gameService.isGameRunning;

  startNewGame = () => {
    this.gameService.startNewGame();
  };
}
