import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  email = '';

  principles = [
    {
      icon: 'scale',
      title: 'Libertad Individual',
      description: 'El derecho inalienable de cada persona a vivir su vida según sus propios valores y decisiones.'
    },
    {
      icon: 'trending_up',
      title: 'Libre Mercado',
      description: 'El intercambio voluntario como motor del progreso y la prosperidad de las naciones.'
    },
    {
      icon: 'account_balance',
      title: 'Propiedad Privada',
      description: 'El fundamento de la civilización y la base de toda libertad económica y política.'
    },
    {
      icon: 'gavel',
      title: 'Estado Limitado',
      description: 'Un gobierno restringido a proteger los derechos individuales, no a violarlos.'
    }
  ];

  featuredResource = {
    tag: 'Lectura Esencial',
    title: 'Camino de Servidumbre',
    author: 'Friedrich A. Hayek',
    description: 'La obra maestra que advierte sobre los peligros del colectivismo y la planificación central. Una lectura obligatoria para entender el siglo XX.',
    href: '/biblioteca/camino-de-servidumbre'
  };

  resources = [
    {
      title: 'La Acción Humana',
      author: 'Ludwig von Mises',
      type: 'Tratado',
      href: '/biblioteca/la-accion-humana'
    },
    {
      title: 'Libertad de Elegir',
      author: 'Milton Friedman',
      type: 'Ensayo',
      href: '/biblioteca/libertad-de-elegir'
    },
    {
      title: 'El Individualismo y el Orden Económico',
      author: 'Friedrich A. Hayek',
      type: 'Ensayo',
      href: '/biblioteca/individualismo-orden-economico'
    }
  ];

  onSubmit(): void {
    if (this.email) {
      console.log('Email submitted:', this.email);
      this.email = '';
    }
  }
}
