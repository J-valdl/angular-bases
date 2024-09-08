import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman'
  public age: number = 45

  get capitalizeName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescripton(): string {
    return `${this.name} - ${this.age}`
  }

  changeNameHero(): void {
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 25
  }

  resetForm(): void {
    this.name = 'Ironman'
    this.age = 45
  }
}
