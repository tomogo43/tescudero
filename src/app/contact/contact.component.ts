import { Component, OnInit, OnDestroy } from '@angular/core';
import { LangueService } from '../services/langue.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  langue: string = "FR";
  langueSubscription: Subscription;

  constructor(private langueService: LangueService) { }

  ngOnInit(): void {
    this.langueSubscription = this.langueService.langueSubject.subscribe(
      (value) => {
        this.langue = value;
      }
    );
    this.langueService.emitLangue();
  }

  ngOnDestroy() {
    this.langueSubscription.unsubscribe();
  }

}
