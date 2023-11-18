import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteId:EventEmitter<string> = new EventEmitter();
  @Output()
  public onUpdateID:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList:Character[] = [
    //data del padre
  ]

  onDeleteCharacter( id?:string):void {
    if ( !id ) return;
    this.onDeleteId.emit( id )
  }

  onUpdateCharacter( id?:string ):void{
    if ( !id ) return;
    this.onUpdateID.emit(id);
  }

}
