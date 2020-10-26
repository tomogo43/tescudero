import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-bis',
  templateUrl: './home-bis.component.html',
  styleUrls: ['./home-bis.component.scss']
})
export class HomeBisComponent implements OnInit {

  // chargement de la photo de profil
  loading: boolean = true;
  
  constructor(private router: Router) { }

  // vérifie si la photo de profil est chargée
  onLoad() {
    this.loading = false;
  }
  
  // affiche le CV
  viewCV() {
    window.open("http://tescudero.fr/documents/cv_escudero.pdf");
  }

  // change de component 
  changeComponent(section) {
    switch (section) {
      case "education":
          this.router.navigate(['/eportfolio/education_R&T']);
        break;
      case "apprenticeship":
          this.router.navigate(['/eportfolio/apprenticeship']);
          break;
      case "english":
          this.router.navigate(['/eportfolio/professional-english']);
          break;
      case "activities":
          this.router.navigate(['/eportfolio/sports']);
          break;
      default:
          this.router.navigate(['/eportfolio/home'])
        break;
    }
  }

  ngOnInit(): void {
  }

}
