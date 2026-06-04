import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from '../../models/autor.model';
import { Recurso } from '../../models/recurso.model';
import { AutoresService } from '../../services/autores-tracks.service';
import { RecursosService } from '../../services/recursos.service';

@Component({
  selector: 'app-autor',
  standalone: false,
  templateUrl: './autor.html',
  styleUrl: './autor.scss',
})
export class AutorComponent implements OnInit {
  autor: Autor | undefined;
  recursos: Recurso[] = [];
  cargando = true;

  escuelaLabel: Record<string, string> = {
    'austriaca': 'Escuela Austriaca',
    'chicago': 'Escuela de Chicago',
    'liberal-clasico': 'Liberalismo Clásico',
    'otro': 'Otro',
  };

  tipoLabel: Record<string, string> = {
    libro: 'Libro', video: 'Video', articulo: 'Artículo',
    podcast: 'Podcast', ensayo: 'Ensayo', curso: 'Curso',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private autoresService: AutoresService,
    private recursosService: RecursosService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) { this.router.navigate(['/biblioteca']); return; }

    this.autoresService.getById(id).subscribe(autor => {
      if (!autor) { this.router.navigate(['/biblioteca']); return; }
      this.autor = autor;

      this.recursosService.getByAutor(id).subscribe(recursos => {
        this.recursos = recursos;
        this.cargando = false;
      });
    });
  }
}