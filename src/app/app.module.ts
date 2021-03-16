import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ProjetsComponent } from './projets/projets.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { PostsComponent } from './posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavService } from './services/sidenav.service';
import { RouterModule, Routes } from '@angular/router';
import { PositionService } from './services/position.service';

/* Font awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* Sidenav */
import {  MatSidenavModule} from '@angular/material/sidenav';
/* tooltip */
import { MatTooltipModule } from '@angular/material/tooltip';
/* ripple */
import { MatRippleModule } from '@angular/material/core';
/* MatCard */
import { MatCardModule } from '@angular/material/card';
/* MatProgressSpinner */
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
/* MatProgressBar */
import { MatProgressBarModule } from '@angular/material/progress-bar';
/* Divider */
import { MatDividerModule } from '@angular/material/divider';
/* Dialog */
import { MatDialogModule } from '@angular/material/dialog';
/* MatExpansion */
import { MatExpansionModule } from '@angular/material/expansion';
/* Icon */
import { MatIconModule } from '@angular/material/icon';
/* FormField */
import { MatFormFieldModule } from '@angular/material/form-field';
/* Input */
import { MatInputModule } from '@angular/material/input';
/* Button */
import { MatButtonModule } from '@angular/material/button';
/* Menu */
import { MatMenuModule } from '@angular/material/menu';

import { SideComponent } from './side/side.component';
import { ContactComponent } from './contact/contact.component';
import { LangueService } from './services/langue.service';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { FooterComponent } from './footer/footer.component';
import { EportfolioComponent } from './eportfolio/eportfolio.component';
import { HomeBisComponent } from './eportfolio/home-bis/home-bis.component';
import { ApprenticeshipComponent } from './eportfolio/apprenticeship/apprenticeship.component';
import { EducationComponent } from './eportfolio/education/education.component';
import { ProfessionalEnglishComponent } from './eportfolio/professional-english/professional-english.component';
import { SportsComponent } from './eportfolio/sports/sports.component';
import { CLMComponent } from './eportfolio/clm/clm.component';


const appRoutes : Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'cv', component: CurriculumVitaeComponent },
  { path : 'eportfolio', component: EportfolioComponent },
  { path : 'eportfolio/:section', component: EportfolioComponent },
  { path : 'projects', component: ProjetsComponent },
  { path : 'posts', component: PostsComponent },
  { path : 'contact', component: ContactComponent },
  { path : '', component: HomeComponent },
  { path : 'not-found', component: FourOhFourComponent },
  { path : '**', redirectTo: 'not-found' }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurriculumVitaeComponent,
    ProjetsComponent,
    FourOhFourComponent,
    PostsComponent,
    HeaderComponent,
    SideComponent,
    ContactComponent,
    DialogOverviewComponent,
    FooterComponent,
    EportfolioComponent,
    EducationComponent,
    HomeBisComponent,
    ApprenticeshipComponent,
    ProfessionalEnglishComponent,
    SportsComponent,
    CLMComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatTooltipModule,
    MatRippleModule,
    FontAwesomeModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDividerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SidenavService,
    PositionService,
    LangueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
