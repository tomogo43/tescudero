import { Component, OnInit, OnDestroy } from '@angular/core';
import { LangueService } from '../services/langue.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // chargement de la photo de profil
  loading: boolean=true;

  // langue de l'appli
  langue: string = 'FR';

  // subscription langue
  langueSubscription: Subscription;

  constructor(private langueService: LangueService) { }

  // vérifie si la photo est chargée
  onLoad() {
    this.loading = false;
  }

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
