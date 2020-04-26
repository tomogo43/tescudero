import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
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

}
