import { Component, OnInit, OnDestroy } from '@angular/core';
import { LangueService } from '../services/langue.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit, OnDestroy {

  langueSubscription: Subscription;
  langue: string = "FR"

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
