import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros.component';
import { GoogleComponent } from './google/google.component';
import { ByServiceComponent } from './by-service/by-service.component';


const routes: Routes = [
  {
    path: '',
    component: LibrosComponent,
    children: [
      { path: 'google', component: GoogleComponent},
      { path: 'byservice', component: ByServiceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
