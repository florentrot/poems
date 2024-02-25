import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {PoemListComponent} from "./components/poem-list/poem-list.component";
import {PoemDetailsComponent} from "./components/poem-details/poem-details.component";
import {FooterComponent} from "./components/footer/footer.component";
import {PoetInfoComponent} from "./components/poet-info/poet-info.component";
import {PoemService} from "./services/poem.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ReverseListPipe } from './pipes/reverse-list.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PoemListComponent,
    PoemDetailsComponent,
    FooterComponent,
    PoetInfoComponent,
    ReverseListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PoemService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
