import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { BankService } from '../../services/bank.service';
import { Transaction } from '../../models/saldo.model';

@Component({
  selector: 'app-lista-mov',
  imports: [NgClass, CommonModule,RouterLink],
  templateUrl: './lista-mov.html',
  styleUrl: './lista-mov.css',
})
export class ListaMov implements OnInit{

  movimenti: Transaction[] = [];

  constructor(private bankService: BankService, private router: Router) {}


  ngOnInit(): void {
    this.bankService.getTransactions(1).subscribe({
      next: (response) => {
        this.movimenti = response;
      },
      error: (err) => {
          console.error("Error during call:", err);
        }
    })
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
    zIndex: isNear ? 20 : -1
  };
});
}
