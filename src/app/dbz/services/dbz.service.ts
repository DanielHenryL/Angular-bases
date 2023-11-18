import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters:Character[] = [
    {
      id:uuid(),
      name:'Krillin',
      power:1000
    },
    {
      id:uuid(),
      name:'Goku',
      power:9500
    },
    {
      id:uuid(),
      name:'Vegeta',
      power:7500
    }
  ]
  public character:Character= {
    name: '',
    power: 0
  }

  addCharacter( character:Character ):void {
    const newCharacter = {
      id:uuid(),
      ...character
    }
    this.characters.push( newCharacter )
  }

  deleteCharacterById( id:string ):void{
    this.characters = this.characters.filter( character => character.id !== id )
  }

  characterById( id:string ){
    const character = this.characters.find( character => character.id == id );
    this.character = {...character!}
  }
  updateCharacter( character:Character ):void{
    this.characters = this.characters.map( c => {
      if ( c.id == character.id) {
        const charDB = {
          ...c,
          ...character
        }
        return charDB;
      }
      return c
    })
  }
}
