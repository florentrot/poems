import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PoemListComponent } from './poem-list/poem-list.component';
import { PoemDetailsComponent } from './poem-details/poem-details.component';
import { FooterComponent } from './footer/footer.component';
import { PoetInfoComponent } from './poet-info/poet-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PoemListComponent,
    PoemDetailsComponent,
    FooterComponent,
    PoetInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
