import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recurso, RecursoTipo, RecursoNivel } from '../../models/recurso.model';
import { RecursosService, RecursoFiltros } from '../../services/recursos.service';
import { AutoresService } from '../../services/autores-tracks.service';
import { Autor } from '../../models/autor.model';

@Component({
  selector: 'app-recurso',
  standalone: false,
  templateUrl: './recurso.html',
  styleUrl: './recurso.scss',
})
export class RecursoComponent implements OnInit {
  recurso: Recurso | undefined;
  autor: Autor | undefined;
  cargando = true;

  get tipoLabel(): string {
    const labels: Record<string, string> = {
      libro: 'Libro', video: 'Video', articulo: 'Artículo',
      podcast: 'Podcast', ensayo: 'Ensayo', curso: 'Curso',
    };
    return this.recurso ? (labels[this.recurso.tipo] ?? this.recurso.tipo) : '';
  }

  get nivelLabel(): string {
    const labels: Record<string, string> = {
      principiante: 'Principiante', intermedio: 'Intermedio', avanzado: 'Avanzado',
    };
    return this.recurso ? (labels[this.recurso.nivel] ?? this.recurso.nivel) : '';
  }

  get idiomaLabel(): string {
    return this.recurso?.idioma === 'es' ? 'Español' : 'Inglés';
  }

  get nivelClass(): string {
    if (!this.recurso) return '';
    const map: Record<string, string> = {
      principiante: 'nivel-p', intermedio: 'nivel-i', avanzado: 'nivel-a',
    };
    return map[this.recurso.nivel] ?? '';
  }

  get badgeNivelClass(): string {
    if (!this.recurso) return '';
    const map: Record<string, string> = {
      principiante: 'badge-nivel-p', intermedio: 'badge-nivel-i', avanzado: 'badge-nivel-a',
    };
    return map[this.recurso.nivel] ?? '';
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recursosService: RecursosService,
    private autoresService: AutoresService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) { this.router.navigate(['/catalogo']); return; }

    this.recursosService.getById(id).subscribe(recurso => {
      if (!recurso) { this.router.navigate(['/catalogo']); return; }
      this.recurso = recurso;
      this.cargando = false;

      this.autoresService.getById(recurso.autorId).subscribe(autor => {
        this.autor = autor;
      });
    });
  }
}