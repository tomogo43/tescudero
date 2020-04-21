import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean=true;

  constructor() { }

  // vérifie si la photo est chargée
  onLoad() {
    this.loading = false;
  }

  ngOnInit(): void {
  }

}
