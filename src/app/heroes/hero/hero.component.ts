import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'ironman'
  public age:number = 26

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${this.name} - ${this.age} `
  }

  public changeName():void{
    this.name = 'Daniel'
  }

  public changeAge():void{
    this.age = 23
  }

  public resetForm():void{
    this.name = 'iroman'
    this.age = 26
  }
}
