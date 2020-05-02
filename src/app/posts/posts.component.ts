import { Component, OnInit, OnDestroy } from '@angular/core';
import { LangueService } from '../services/langue.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

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
