import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '../services/sidenav.service';
import { PositionService } from '../services/position.service';
import { Subscription } from 'rxjs';

import { faHome, 
         faUser, 
         faPuzzlePiece,
         faPen,
         faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  // toutes les icons utilisées dans le component side
  faHome = faHome;
  faUser = faUser;
  faPuzzlePiece = faPuzzlePiece;
  faPen = faPen;
  faEnvelope = faEnvelope;

  positionSubscription: Subscription;
  position: string = '';

  constructor(private router: Router,
              private sidenavService: SidenavService,
              private positionService: PositionService) { 
               }

  ngOnInit(): void {
    this.positionService.positionSubject.subscribe(
      (pos) => {
        this.position = pos;
      }
    );
    this.positionService.emitPosition();
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
  }

}
