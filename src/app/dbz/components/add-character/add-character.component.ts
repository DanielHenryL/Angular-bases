import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //Creamos el evento para emitir el formulario
  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();
  @Output()
  public onUpdateCharacter:EventEmitter<Character> = new EventEmitter();

  @Input()
  public character:Character = {
    name:'',
    power:0
  }

  emitCharacter(id?:string):void {
    if ( this.character.name.length === 0 ) return;

    if (id) {
      this.onUpdateCharacter.emit(this.character)
    }else{
      this.onNewCharacter.emit(this.character)
    }

    this.character = { name:'', power:0 }
  }

}
