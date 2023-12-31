import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { EditComponent } from './components/edit/edit.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { PagenNotFoundComponent } from './components/pagen-not-found/pagen-not-found.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactManagerComponent,
    EditComponent,
    ViewContactComponent,
    SpinnerComponent,
    AddContactComponent,
    PagenNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
