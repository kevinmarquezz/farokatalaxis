import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { RecursoComponent } from './pages/recurso/recurso';
import { Tracks } from './pages/tracks/tracks';
import { Track } from './pages/track/track';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'biblioteca', component: Catalogo },
  { path: 'recurso/:id', component: RecursoComponent },
  { path: 'tracks', component: Tracks },
  { path: 'track/:id', component: Track },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}