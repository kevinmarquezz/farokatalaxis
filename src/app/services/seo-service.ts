import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {

  private readonly siteName = 'Faro Katalaxis';
  private readonly defaultDescription = 'Biblioteca curada de economía liberal, Escuela Austriaca y filosofía política. Recursos, autores y tracks de lectura guiada.';

  constructor(private title: Title, private meta: Meta) {}

  setDefault(): void {
    this.title.setTitle(this.siteName);
    this.setDescription(this.defaultDescription);
  }

  setPage(pageTitle: string, description?: string): void {
    this.title.setTitle(`${pageTitle} | ${this.siteName}`);
    this.setDescription(description ?? this.defaultDescription);
  }

  private setDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }
}