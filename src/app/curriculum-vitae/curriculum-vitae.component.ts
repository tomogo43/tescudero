import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { LangueService } from '../services/langue.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent implements OnInit, OnDestroy {

  dateTomorow = new Date(Date.now());
  october = new Date('2019/10/07');
  diff: string;
  langue = 'FR';
  langueSubscription: Subscription
  
  

  constructor(private matDialog: MatDialog,
              private langueService: LangueService) {
    
   }

  ngOnInit(): void {
    this.langueSubscription = this.langueService.langueSubject.subscribe(
      (value) => {
        this.langue = value;

        // si langue français
        if (this.langue === 'FR') {
          moment.locale('fr');
        } else if (this.langue === 'EN') {
          moment.locale('en');
        }

        // calcula la difference de date
        this.DateDifference();
      }
    );
    this.langueService.emitLangue();
  }

  DateDifference(): void {
    this.diff = moment("20191007", "YYYYMMDD").fromNow();

  }

  /* Ouvre un dialog */
  openDialog(Place: string): void {
    const dialogRef = this.matDialog.open(DialogOverviewComponent,{
      width: '850px',
      data: {
        place: Place, 
        content: 'materiaux',
        image: 'http://tescudero.fr/images/chausson-materiaux.png',
        lat: 43.690455,
        lng: 1.406237}
    })
    console.log("dialog");
    dialogRef.afterClosed().subscribe(
      (result) => {
        console.log(result);
      }
    )
  }

  ngOnDestroy() {
    this.langueSubscription.unsubscribe();
  }

}
