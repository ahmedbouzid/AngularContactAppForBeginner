import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contactDTO';
import { Group } from '../models/groupDTO';

@Injectable({
  providedIn: 'root',
})
export class ContactServicesService {
  API = 'http://localhost:8080/'; /* JSON Server URL */
  constructor(private http: HttpClient) {}

  getAllContact() : Observable<Contact[]> {
    return <Observable<Contact[]>> this.http.get(this.API+ 'contacts');
  }
  getOneContact(contactId : string):Observable<Contact> {
    return this.http.get<Contact>(this.API +'contacts/' +contactId)
  }
  createOneConntact(payload:Contact) {
    return this.http.post(this.API + 'contacts' ,payload)
  }
  updateContact (contact : Contact , idContact :string) {
    return this.http.put<Contact>(this.API+'contacts/'+idContact ,contact)
  }
  deleteContact(contactId : string) {
    return this.http.delete<{}>(this.API + 'contacts/' + contactId)
  }
  getAllGroups () : Observable<Group > {
    return this.http.get<Group>(this.API+'groups')
  }
  getOneGroup (contact  :Contact ) : Observable<Group>{
 return this.http.get<Group> (`${this.API}groups/${contact.groubId}`)
  }
}
