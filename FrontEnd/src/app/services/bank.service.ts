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

  //transaction details
  getTransactionDet(idAccount: number, id:number): Observable<Transaction>{
    return this.http.get<Transaction>(`${this.apiUrl}/${idAccount}/transactions/${id}`);
  }

  //update description
  updateDescTrans(idAccount: number, id: number, newDescription: string): Observable<Transaction> {
  const url = `${this.apiUrl}/${idAccount}/transactions/${id}`;
  return this.http.put<Transaction>(url, { description: newDescription });
  }

  //delete transiction
  deleteTrans(idAccount: number, id: number): Observable<any>{
    const url = `${this.apiUrl}/${idAccount}/transactions/${id}`;
    return this.http.delete(url);

  }

  //withdrawals
  doWithdrawals(idAccount: number, data: Partial<Transaction>): Observable<Transaction>{
    const url = `${this.apiUrl}/${idAccount}/withdrawals`;
    return this.http.post<Transaction>(url, data);
  }

  //deposit
  doWithdrawals(idAccount: number, data: Partial<Transaction>): Observable<Transaction>{
    const url = `${this.apiUrl}/${idAccount}/deposit`;
    return this.http.post<Transaction>(url, data);
  }

}
