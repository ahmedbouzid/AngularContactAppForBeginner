import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from 'src/app/models/contactDTO';
import { Group } from 'src/app/models/groupDTO';
import { ContactServicesService } from 'src/app/service/contact-services.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
contactId : string | null = null ;
contact : Contact = {} as Contact ;
errorMessage : string  | null = null ;
loading : boolean = false ;
group : Group  = {} as Group ;
constructor(private currnteRoute : ActivatedRoute ,private service : ContactServicesService ){}
  ngOnInit(): void {
this.currnteRoute.paramMap.subscribe({
  next : (param:ParamMap) => {
    this.contactId = param.get('contactId')

    console.log(this.contactId);

  }
})
 if (this.contactId) {
 this.loading = true ;
  this.service.getOneContact(this.contactId).subscribe({
    next : (data : Contact) => {
      this.contact = data ;
      console.log(this.contact);
      this.service.getOneGroup(data).subscribe({
        next:(data :Group) => {
          this.group = data ;
          console.log(this.group);

        }
      })
      this.loading = false ;

    } ,
    error : (err) => {
      this.errorMessage = err ;
    }
  })

 }
  }

}
