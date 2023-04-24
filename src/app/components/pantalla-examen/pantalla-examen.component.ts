import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon.service';
import { IDataPokemon } from 'src/app/interface/pokemonInterface';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css']
})

export class PantallaExamenComponent implements OnInit{

  listPokemon: IDataPokemon[] = [];
  columnTabla: any;

  constructor(private ruta: Router, 
              private pokemonService: PokemonService,
              private mensajes: MessageService){

}

  ngOnInit(): void {
    this.iniColumnaTabla();
    this.pokemonService.getAllPokemon().subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.listPokemon = datos.results;
          this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
        },
        error: (err) => {
          console.log(err);
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un problema al consumir el api.' });

        }
      }
    )
    
  }

  iniColumnaTabla(){
    this.columnTabla = [
       
        {
          field: 'name', header: 'Nombre Pokemon'
        },
        {
          field: 'url', header: 'Rrl Pokemon'
        }
     ];
  }

}
