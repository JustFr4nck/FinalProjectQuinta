import { Injectable } from '@angular/core';
import { AccountBalance, ConversionBTC, ConversionUSD, Transaction } from '../models/saldo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private apiUrl = '/accounts';

  constructor(private http: HttpClient){}

  //balance
  getAccountBalance(id: number): Observable<AccountBalance>{
    return this.http.get<AccountBalance>(`${this.apiUrl}/${id}/balance`);
  }

  //transactions list
  getTransactions(idAccount: number): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.apiUrl}/${idAccount}/transactions`);
  }

  //convert to USD
  getConvUSD(idAccount: number): Observable<ConversionUSD>{
    return this.http.get<ConversionUSD>(`${this.apiUrl}/${idAccount}/balance/convert/fiat?to=USD`);
  }

  //convert to BTC
  getConvBTC(idAccount: number): Observable<ConversionBTC>{
    return this.http.get<ConversionBTC>(`${this.apiUrl}/${idAccount}/balance/convert/crypto?to=BTC`);
  }

}
