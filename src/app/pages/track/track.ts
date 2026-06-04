import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningTrack, TrackPaso, Autor } from '../../models/autor.model';
import { Recurso } from '../../models/recurso.model';
import { TracksService, AutoresService } from '../../services/autores-tracks.service';
import { RecursosService } from '../../services/recursos.service';

interface PasoConRecurso {
  paso: TrackPaso;
  recurso: Recurso | undefined;
  autor: Autor | undefined;
  numero: number;
}

@Component({
  selector: 'app-track',
  standalone: false,
  templateUrl: './track.html',
  styleUrl: './track.scss',
})
export class Track implements OnInit {
  track: LearningTrack | undefined;
  pasos: PasoConRecurso[] = [];
  cargando = true;

  nivelLabel: Record<string, string> = {
    principiante: 'Principiante',
    intermedio: 'Intermedio',
    avanzado: 'Avanzado',
  };

  tipoLabel: Record<string, string> = {
    libro: 'Libro', video: 'Video', articulo: 'Artículo',
    podcast: 'Podcast', ensayo: 'Ensayo', curso: 'Curso',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tracksService: TracksService,
    private recursosService: RecursosService,
    private autoresService: AutoresService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) { this.router.navigate(['/tracks']); return; }

    this.tracksService.getById(id).subscribe(track => {
      if (!track) { this.router.navigate(['/tracks']); return; }
      this.track = track;

      const ids = track.pasos.map(p => p.recursoId);
      this.recursosService.getByIds(ids).subscribe(recursos => {
        const recursosMap = Object.fromEntries(recursos.map(r => [r.id, r]));

        this.autoresService.getAll().subscribe(autores => {
          const autoresMap = Object.fromEntries(autores.map(a => [a.id, a]));
          this.pasos = track.pasos.map((paso, i) => {
            const recurso = recursosMap[paso.recursoId];
            return {
              paso,
              recurso,
              autor: recurso ? autoresMap[recurso.autorId] : undefined,
              numero: i + 1,
            };
          });
          this.cargando = false;
        });
      });
    });
  }
}