import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { RecursoComponent } from './pages/recurso/recurso';
import { Tracks } from './pages/tracks/tracks';
import { Track } from './pages/track/track';
import { AutorComponent } from './pages/autor/autor';
import { Autores } from './pages/autores/autores';
import { NotFound } from './pages/not-found/not-found';
import { SobreNosotros } from './pages/sobre-nosotros/sobre-nosotros';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'biblioteca', component: Catalogo },
  { path: 'recurso/:id', component: RecursoComponent },
  { path: 'tracks', component: Tracks },
  { path: 'track/:id', component: Track },
  { path: 'autores', component: Autores },
  { path: 'autor/:id', component: AutorComponent },
  { path: 'sobre-nosotros', component: SobreNosotros },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}