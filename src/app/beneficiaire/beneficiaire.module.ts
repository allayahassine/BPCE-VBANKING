import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeneficiaireComponent } from './beneficiaire.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'beneficiaire',
    component: BeneficiaireComponent,
  },
];

@NgModule({
  declarations: [BeneficiaireComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BeneficiaireModule {}
