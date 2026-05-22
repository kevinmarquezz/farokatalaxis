import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerSections = [
    {
      title: 'Explorar',
      links: [
        { label: 'Inicio', href: '/' },
        { label: 'Biblioteca', href: '/biblioteca' },
        { label: 'Tracks', href: '/tracks' },
      ]
    },
    // {
    //   title: 'Comunidad',
    //   links: [
    //     { label: 'Foros', href: '/foros' },
    //     { label: 'Eventos', href: '/eventos' },
    //     { label: 'Grupos de Estudio', href: '/grupos' },
    //     { label: 'Voluntariado', href: '/voluntariado' }
    //   ]
    // },
    // {
    //   title: 'Proyecto',
    //   links: [
    //     { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
    //     { label: 'Misión', href: '/mision' },
    //     { label: 'Contacto', href: '/contacto' },
    //     { label: 'Donaciones', href: '/donaciones' }
    //   ]
    // }
  ];

}
