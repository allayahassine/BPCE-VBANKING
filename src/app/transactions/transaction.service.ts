import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransaction } from './transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionUrl: string = 'api/transactions/transactions.json';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(this.transactionUrl);
  }
}