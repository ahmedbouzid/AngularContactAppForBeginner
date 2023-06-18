import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from 'src/app/models/contactDTO';
import { Group } from 'src/app/models/groupDTO';
import { ContactServicesService } from 'src/app/service/contact-services.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
loading : boolean = false ;
contactId : string | null = null ;
contact : Contact = {} as Contact ;
errorMessge : string | null = null ;
groups : Group = [] as Group | any ;

constructor(private currrenteRoute : ActivatedRoute , private service : ContactServicesService) {}
ngOnInit(): void {
  this.loading = true
this.currrenteRoute.paramMap.subscribe({
  next:(param : ParamMap) => {
    this.contactId = param.get('contactId') ;
  }
})
if (this.contactId) {
  this.service.getOneContact(this.contactId).subscribe({
    next : (data : Contact) => {
      this.contact = data ;
      console.log(data);
      this.loading = false ;
      this.service.getAllGroups().subscribe({
        next : (data : any) => {
          this.groups = data ;
        }
      })
    },
    error : (err) => {
      this.errorMessge = err ;
      this.loading = false ;
    }
  })
}
}
}
