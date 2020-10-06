import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-bis',
  templateUrl: './home-bis.component.html',
  styleUrls: ['./home-bis.component.scss']
})
export class HomeBisComponent implements OnInit {

  // chargement de la photo de profil
  loading: boolean = true;
  
  constructor() { }

  // vérifie si la photo de profil est chargée
  onLoad() {
    this.loading = false;
  }
  
  ngOnInit(): void {
  }

}
