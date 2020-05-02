import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { LangueService } from '../services/langue.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // chargement du component
  loading: boolean = false;

  // subscrition langue
  langueSubscription: Subscription;

  // langue de l'appli
  langue; string = 'FR';

  //ouvrir le menu 
  openMenu: string = "Ouvrir le menu"

  constructor(private sidenavService : SidenavService,
              private langueService : LangueService,
              private router : Router) {
    this.router.events.subscribe(
      (event) => {
        switch (true) {
          // la page est en train de charger
          case event instanceof NavigationStart: {
            this.loading = true
            break;
          }
          // la page n'est plus en train de chager
          case event instanceof NavigationCancel:
          case event instanceof NavigationEnd:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
        }
      }
    )
  }

  ngOnInit(): void {
    this.langueSubscription = this.langueService.langueSubject.subscribe(
      (value) => {
        this.langue = value;
        if(value === "EN") {
          this.openMenu = "Open menu";
        } else {
          this.openMenu = "Ouvrir le menu";
        }
      }
    );
    this.langueService.emitLangue();
  }

  openSider() {
    this.sidenavService.opened = true;
    this.sidenavService.emitOpened();
  }

  changeLangue(value) {
    this.langueService.changeLangue(value);
  }

  ngOnDestroy() {
    this.langueSubscription.unsubscribe();
  }

}
