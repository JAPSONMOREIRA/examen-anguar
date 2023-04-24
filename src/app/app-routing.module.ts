import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { PantallaExamenComponent } from './components/pantalla-examen/pantalla-examen.component';

const routes: Routes = [
    {path: '', redirectTo: 'examen', pathMatch: 'full'},
    {path: 'examen', component: PantallaExamenComponent}

]

@NgModule (
    {
        declarations: [],
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports : [RouterModule]
    }
)

export class AppRoutingModule {}