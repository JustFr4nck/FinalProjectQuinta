import { BankService } from './../../services/bank.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deposito.html',
  styleUrl: './deposito.css',
})
export class Deposito {
  importo: number = 0;
  particles: any[] = [];
  icons = ['💵', '💰', '💷', '💶', '💎', '✨'];
  descrizione: string = "";

  constructor(private bankService: BankService, private router: Router) {}

  faiDeposito() {
  if (this.importo <= 0){
    alert('Insert a valid import');
    return;
  }

  for (let i = 0; i < 20; i++) {
    this.createParticle();
  }

  console.log(`Depositando: ${this.importo}€`);

  setTimeout(() => {
    this.particles = [];
  }, 2000);
}

private createParticle() {
  const id = Math.random();
  const icon = this.icons[Math.floor(Math.random() * this.icons.length)];

  const velocity = 80 + Math.random() * 150;
  const angle = Math.random() * Math.PI * 2;

  this.particles.push({
    id,
    icon,
    x: Math.cos(angle) * velocity,
    y: Math.sin(angle) * velocity,
    rotate: Math.random() * 720,
  });
}

  moneyRain = Array.from({ length: 40 }, (_, i) => {
    const isNear = Math.random() > 0.7;
    return {
      id: i,
      char: Math.random() > 0.5 ? '€' : '$',
      left: Math.floor(Math.random() * 100),
      delay: Math.random() * 10,
      duration: isNear ? 4 + Math.random() * 2 : 8 + Math.random() * 4,
      size: isNear ? 40 + Math.random() * 20 : 15 + Math.random() * 10,
      opacity: isNear ? 0.4 : 0.15,
      blur: isNear ? '4px' : '0px',
      zIndex: isNear ? 20 : -1,
    };

});
}
