import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sirtet';
}
