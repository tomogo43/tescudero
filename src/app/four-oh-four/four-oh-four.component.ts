import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LangueService } from '../services/langue.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.scss']
})
export class FourOhFourComponent implements OnInit, OnDestroy {

  langue: string;
  langueSubscription: Subscription;

  constructor(private router: Router,
              private langueService: LangueService) { }

  ngOnInit(): void {
    this.langueSubscription = this.langueService.langueSubject.subscribe(
      (value) => {
        this.langue = value;
      }
    );
    this.langueService.emitLangue();
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.langueSubscription.unsubscribe();
  }

}
