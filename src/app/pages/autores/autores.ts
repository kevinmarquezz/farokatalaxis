import { Component, OnInit } from '@angular/core';
import { Autor, EscuelaEconomica } from '../../models/autor.model';
import { AutoresService } from '../../services/autores-tracks.service';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-autores',
  standalone: false,
  templateUrl: './autores.html',
  styleUrl: './autores.scss',
})
export class Autores implements OnInit {
  autores: Autor[] = [];
  filteredAutores: Autor[] = [];
  selectedEscuela = '';

  escuelas = [
    { value: 'austriaca', label: 'Escuela Austriaca' },
    { value: 'chicago', label: 'Escuela de Chicago' },
    { value: 'liberal-clasico', label: 'Liberalismo Clásico' },
  ];

  escuelaLabel: Record<string, string> = {
    austriaca: 'Escuela Austriaca',
    chicago: 'Escuela de Chicago',
    'liberal-clasico': 'Liberalismo Clásico',
    otro: 'Otro',
  };

  constructor(private autoresService: AutoresService, private seo: SeoService) {}

  ngOnInit(): void {
      this.seo.setPage('Autores', 'Los grandes economistas y filósofos de la tradición liberal. Mises, Hayek, Rothbard, Friedman y más.');
    this.autoresService.getAll().subscribe(autores => {
      this.autores = autores;
      this.filteredAutores = autores;
    });
  }

  filterAutores(): void {
    if (!this.selectedEscuela) {
      this.filteredAutores = this.autores;
    } else {
      this.filteredAutores = this.autores.filter(a => a.escuela === this.selectedEscuela);
    }
  }

  clearFilter(): void {
    this.selectedEscuela = '';
    this.filteredAutores = this.autores;
  }
}