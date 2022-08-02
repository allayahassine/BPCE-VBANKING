import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBANValidator } from './validators/iban.validator';

@Component({
  selector: 'app-beneficiaire',
  templateUrl: './beneficiaire.component.html',
  styleUrls: ['./beneficiaire.component.css'],
})
export class BeneficiaireComponent implements OnInit {
  beneficiaireForm!: FormGroup;
  listPays= ['France', 'Allemagne', 'Suisse', 'Espagne'];
  ibanNotFocused: boolean | undefined;
  nameNotFocused: boolean | undefined;
  addressNotFocused: boolean | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.beneficiaireForm = this.formBuilder.group({
      pays: [this.listPays[0], Validators.required],
      iban: ['', [Validators.required, IBANValidator]],
      nom: ['', Validators.required],
      address: ['', Validators.required],
    });
    this.ibanNotFocused = false;
    this.nameNotFocused = false;
    this.addressNotFocused = false;
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  onSubmit(): void {
    console.log('submitted', this.beneficiaireForm.value);
    alert("Bénéficiaire ajouté");
  }
}
