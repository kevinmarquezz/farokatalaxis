import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: false,
  templateUrl: './sobre-nosotros.html',
  styleUrl: './sobre-nosotros.scss',
})
export class SobreNosotros implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage('Sobre nosotros', 'Qué es Faro Katalaxis, cuál es su misión y por qué existe.');
  }
}