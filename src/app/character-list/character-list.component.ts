import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../services/service.service";
import { Character } from '../model/character';

let ListCharacter = new Array<Character>;

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.getCharacterService();
  }

  getCharacterService(){
    this.serviceService.getCharacter().subscribe(resp => {
      ListCharacter = resp;
      console.log(resp);
    });

  }




}
