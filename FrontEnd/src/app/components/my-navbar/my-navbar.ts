import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-my-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './my-navbar.html',
  styleUrls: ['./my-navbar.css']
})
export class MyNavbar implements OnInit {
  navLinks: any[] = [];
  isMenuOpen = false;

  ngOnInit(): void {
    this.navLinks = routes
      .filter(route => route.path !== "" && route.path !== undefined && route.path !== "**" && !route.path.includes(':'))
      .map(route => ({
        path: `/${route.path}`,
        label: route.path!
      }));
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  getCrazyLabel(label: string): string {
    const mapping: { [key: string]: string } = {
      'listaMovimenti': 'TRANSACTIONS_LIST',
      'movDetails': 'TRANSACTION_DETAIL',
      'prelievo': 'DEPOSIT',
      'deposito': 'WITHDRAW',
      'ModificaDescrizione': 'MODIFY_DESCRIPTION',
      'eliminaMovimento': 'DELETE_MOVEMENT'
    };
    return mapping[label] || label.toUpperCase();
  }
}
