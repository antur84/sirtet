import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-main-menu-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './main-menu-page.component.html',
  styleUrl: './main-menu-page.component.scss',
})
export class MainMenuPageComponent {
  startNewGame = () => {
    console.log('startNewGame');
  }
}
