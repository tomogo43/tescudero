import { Component, OnInit, OnDestroy } from '@angular/core';
import { LangueService } from '../services/langue.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  langue: string = "FR";
  langueSubscription: Subscription;

  emailSendForm: FormGroup;

  constructor(private langueService: LangueService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.langueSubscription = this.langueService.langueSubject.subscribe(
      (value) => {
        this.langue = value;
      }
    );
    this.langueService.emitLangue();
    // initialisation du formulaire
    this.initForm();
  }

  initForm() {
    this.emailSendForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.emailSendForm.value);
  }

  ngOnDestroy() {
    this.langueSubscription.unsubscribe();
  }

}
