import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private GetListCharacter = "https://rickandmortyapi.com/api/character/1,2,3,4,5"; 

  constructor(private http: HttpClient) {}

   public getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(this.GetListCharacter);
  }

}
