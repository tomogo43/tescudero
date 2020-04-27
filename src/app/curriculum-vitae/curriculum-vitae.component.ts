import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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
  langueSubscription: Subscription;

  organismes = [
    {
      place: 'Chausson matériaux',
      lat: 43.690455,
      lng: 1.406237,
      content: '',
      link: 'https://www.chausson-materiaux.fr/'
    },
    {
      place: 'Mairie de Vals près le Puy',
      lat: 45.030246,
      lng: 3.875982,
      content: '',
      link: 'https://www.valspreslepuy.fr/'
    },
    {
      place: 'A.S.T.I',
      lat: 46.040780,
      lng: 4.065517,
      content: '',
      link: 'http://www.asti-net.eu/'
    },
    {
      place: 'Numesis le Puy en Velay',
      lat: 45.042990,
      lng: 3.887558,
      content: '',
      link: '#'
    }
  ]
  
  

  constructor(private matDialog: MatDialog,
              private langueService: LangueService) { }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
      console.log("scrolling...");
  }

   scroll(el: HTMLElement) {
     el.scrollIntoView({
       behavior: "smooth"
     });
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
    const index = this.organismes.findIndex(
      (s) => {
        if(s.place === Place) {
          return s;
        }
      }
    );
    if(index>=0 && index <= (this.organismes.length)) {
      const dialogRef = this.matDialog.open(DialogOverviewComponent,{
        width: '850px',
        data: {
          place: this.organismes[index].place, 
          content: this.organismes[index].content,
          link: this.organismes[index].link,
          lat: this.organismes[index].lat,
          lng: this.organismes[index].lng}
      })
      dialogRef.afterClosed().subscribe(
        (result) => {
          console.log(result);
        }
      )
    } else {
      alert("Une erreur est survenue veuillez réessayer");
    }
  }

  ngOnDestroy() {
    this.langueSubscription.unsubscribe();
  }

}
