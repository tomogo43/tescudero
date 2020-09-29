import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '../services/sidenav.service';
import { PositionService } from '../services/position.service';
import { LangueService } from '../services/langue.service';
import { Subscription } from 'rxjs';

import { faHome, 
         faUser, 
         faPuzzlePiece,
         faPen,
         faEnvelope,
         faWallet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit, OnDestroy {
  // toutes les icons utilisées dans le component side
  faHome = faHome;
  faUser = faUser;
  faPuzzlePiece = faPuzzlePiece;
  faPen = faPen;
  faEnvelope = faEnvelope;
  faWallet = faWallet;
  langue: string = "FR";
  langueSubscription: Subscription;

  positionSubscription: Subscription;
  position: string = '';

  constructor(private router: Router,
              private sidenavService: SidenavService,
              private positionService: PositionService,
              private langueService: LangueService) { 
               }

  ngOnInit(): void {
    this.positionService.positionSubject.subscribe(
      (pos) => {
        this.position = pos;
      }
    );
    this.positionService.emitPosition();

    this.langueSubscription = this.langueService.langueSubject.subscribe(
      (value) => {
        this.langue = value;
      }
    );
    this.langueService.emitLangue();
  }

  // change le component en cours
  changeComponent(target: string) {
    this.router.navigate([target]);

    // ferme le sidenav
    this.sidenavService.opened = false;
    this.sidenavService.emitOpened();
  }

  ngOnDestroy() {
    this.positionSubscription.unsubscribe();
    this.langueSubscription.unsubscribe();
  }

}
