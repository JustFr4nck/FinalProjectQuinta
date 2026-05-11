import { Injectable } from '@angular/core';
import { AccountBalance, Transaction } from '../models/saldo.model';
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

}
