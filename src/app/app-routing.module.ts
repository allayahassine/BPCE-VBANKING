import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TransactionsModule } from './transactions/transactions.module';
import { BeneficiaireModule } from './beneficiaire/beneficiaire.module';
const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '',
    loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule),
  },
  { path: '',
  loadChildren: () => import('./beneficiaire/beneficiaire.module').then(m=>m.BeneficiaireModule)
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [

  ],
  imports: [
    TransactionsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
