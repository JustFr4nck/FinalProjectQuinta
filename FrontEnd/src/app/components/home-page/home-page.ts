import { CommonModule, NgClass, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [NgSwitch, NgClass, CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {


//verrà rimossa al momento del collegamento col backend!!!
movimenti = [
  { titolo: 'Stipendio Franck Corp', data: '27 APR 2024', ora: '09:00', importo: 2450.00, categoria: 'salary', tipo: 'entrata' },
  { titolo: 'Apple Store Milano', data: '26 APR 2024', ora: '14:32', importo: -1299.00, categoria: 'tech', tipo: 'uscita' },
  { titolo: 'Amazon.it', data: '25 APR 2024', ora: '18:22', importo: -89.99, categoria: 'shopping', tipo: 'uscita' },
  { titolo: 'Netflix Subscription', data: '20 APR 2024', ora: '02:15', importo: -17.99, categoria: 'service', tipo: 'uscita' },
  { titolo: 'Rimborso Spese', data: '18 APR 2024', ora: '11:00', importo: 150.00, categoria: 'refund', tipo: 'entrata' }
];

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
