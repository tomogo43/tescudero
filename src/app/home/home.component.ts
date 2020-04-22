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
  loading: boolean = true;

  // chargement photo twitter
  loadingTwitter: boolean = true;
  // chargement photo github
  loadingGithub:boolean = true;
  // chargement photo linkedin
  loadingLinkedin:boolean = true;
  // chargement photo strava
  loadingStrava:boolean = true;

  // langue de l'appli
  langue: string = 'FR';

  // subscription langue
  langueSubscription: Subscription;

  constructor(private langueService: LangueService) { }

  // vérifie si la photo de profil est chargée
  onLoad() {
    this.loading = false;
  }
  
  // vérifie si la photo twitter est chargée
  onLoadTwitter() {
    this.loadingTwitter = false;
  }

  // vérifie si la photo github est chargée
  onLoadGithub() {
    this.loadingGithub = false;
  }

  // vérifie si la photo linkedin est chargée
  onLoadLinkedin() {
    this.loadingLinkedin = false;
  }

  // vérifie si la photo strava est chargée
  onLoadStrava() {
    this.loadingStrava = false;
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
