import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GameClockService {
  now() {
    return new Date().getTime();
  }
}
