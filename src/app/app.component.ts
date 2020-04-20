import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidenavService } from './services/sidenav.service'; 
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  // variable qui défini quand il faut ouvrir le sidenav
  opened = false;
  title = 'tescudero';


  openSubscription: Subscription;

  constructor(private sidenavService : SidenavService) { }

  ngOnInit() {

    this.openSubscription = this.sidenavService.openSubject.subscribe(
      (value) => {
        this.opened = value;
      }
    );
    this.sidenavService.emitOpened();
  }

  ngOnDestroy() {
    this.openSubscription.unsubscribe();
  }
}
