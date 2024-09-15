import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 550
    },
    {
      name: 'Goku',
      power: 16000
    },
    {
      name: 'Vegeta',
      power: 15000
    }
  ]

  onNewCharacter(character: Character): void {
    console.log(character)
  }
}
