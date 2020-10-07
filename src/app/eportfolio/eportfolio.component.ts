import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PositionService } from '../services/position.service';
import { LangueService } from '../services/langue.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-eportfolio',
  templateUrl: './eportfolio.component.html',
  styleUrls: ['./eportfolio.component.scss']
})
export class EportfolioComponent implements OnInit {

  positionSubscription: Subscription;
  url:string;
  constructor(private positionService: PositionService,
              private router: Router) { }

  ngOnInit(): void {
    this.positionSubscription = this.positionService.positionSubject.subscribe(
      (getUrl) => {
        if (getUrl === '/eportfolio/home' || getUrl === '/eportfolio' ) {
          this.url = 'home';
        } else if (getUrl === '/eportfolio/education_R&T' || getUrl === '/eportfolio/education_N7') {
          this.url = 'education';
        } else if (getUrl === '/eportfolio/apprenticeship') {
          this.url = 'apprenticeship';
        } else if (getUrl === '/eportfolio/professional-english') {
          this.url = 'professional-english';
        } else if (getUrl === '/eportfolio/sports') {
          this.url = 'sports';
        } else {
          // this.router.navigate(['/eportfolio']);
          this.positionService.position = '/eportfolio';
          this.positionService.emitPosition();
        }
      }
    )
    this.positionService.emitPosition();
  }

  // change le component en cours
  changeComponent(target: string) {
    console.log(target);
    this.router.navigate([target]);
  }

  ngOnDestroy() {
    this.positionSubscription.unsubscribe();
  }

}
