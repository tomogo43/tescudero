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
import { FormsModule } from '@angular/forms';
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

import { SideComponent } from './side/side.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes : Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'cv', component: CurriculumVitaeComponent },
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
    ContactComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SidenavService,
    PositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
