import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITransaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit, OnDestroy {
 
  pageTitle: string = 'Mes Transactions';
  transactions: ITransaction[] = [];
  subscription!: Subscription;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.subscription = this.transactionService.getTransactions().subscribe({
      next: transactions => this.transactions = transactions
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
