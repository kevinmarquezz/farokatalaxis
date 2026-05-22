import { Component, HostListener, OnInit } from '@angular/core';

interface MenuItem {
  route: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar implements OnInit {
  isMenuOpen = false;
  isScrolled = false;
  isSearchOpen = false;

  navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Biblioteca', href: '/biblioteca' },
    { label: 'Tracks', href: '/tracks' },
    // { label: 'Comunidad', href: '/comunidad' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.style.overflow = 'auto';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 1024 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}