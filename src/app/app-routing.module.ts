import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditComponent } from './components/edit/edit.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';

const routes: Routes = [
  {path : '' , redirectTo :'/contact/admin' , pathMatch:'full'} ,
  {path : 'contact/admin' , component: ContactManagerComponent} ,
  {path : 'contact/add' , component: AddContactComponent} ,
  {path : 'contact/edit/:contactId' , component: EditComponent} ,
  {path : 'contact/view/:contactId' , component: ViewContactComponent} ,




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
