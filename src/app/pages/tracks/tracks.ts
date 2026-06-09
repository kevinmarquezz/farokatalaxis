import { Component, OnInit } from '@angular/core';
import { LearningTrack } from '../../models/autor.model';
import { TracksService } from '../../services/autores-tracks.service';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-tracks',
  standalone: false,
  templateUrl: './tracks.html',
  styleUrl: './tracks.scss',
})
export class Tracks implements OnInit {
  tracksEmpezar: LearningTrack[] = [];
  tracksProfundizar: LearningTrack[] = [];

  nivelLabel: Record<string, string> = {
    principiante: 'Principiante',
    intermedio: 'Intermedio',
    avanzado: 'Avanzado',
  };

  constructor(private tracksService: TracksService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage('Tracks', 'Rutas de lectura guiada sobre economía liberal y filosofía política. Encontrá el track que mejor se adapta a tu punto de partida.');
    this.tracksService.getAll().subscribe(tracks => {
      this.tracksEmpezar = tracks.filter(t => t.categoria === 'empezar');
      this.tracksProfundizar = tracks.filter(t => t.categoria === 'profundizar');
    });
  }
}