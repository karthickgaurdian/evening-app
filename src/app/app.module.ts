import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { RatComponent } from './rat/rat.component';



const routes: Routes = [
{path:'dog' ,component:DogComponent},
{path:'cat' ,component:CatComponent},
{path:'rat' ,component:RatComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    CatComponent,
    RatComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
