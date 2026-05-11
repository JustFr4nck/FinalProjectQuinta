import { CommonModule, NgClass, NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountBalance, Transaction } from '../../models/saldo.model';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-home-page',
  imports: [NgSwitch, NgClass, CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})

export class HomePage implements OnInit {


  data?: AccountBalance;
  movimenti: Transaction[] = [];

  constructor(private bankService: BankService) {}

  ngOnInit(): void {

      this.bankService.getAccountBalance(1).subscribe({
        next: (response) => {
          this.data = response;
        },
        error: (err) => {
          console.error("Error during call:", err);
        }
      });

      this.bankService.getTransactions(1).subscribe({
        next: (response: any) => {
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
