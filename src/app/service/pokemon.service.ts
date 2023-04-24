import { ENVIRONMENT_INITIALIZER, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { IDataPokemon, IPokemon } from '../interface/pokemonInterface';


const API_GET_POKEMON = environment.API_GET__ALL_POKEMON;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {

   }

   getAllPokemon(){
    return this.http.get<IPokemon>(API_GET_POKEMON);
  }
}
