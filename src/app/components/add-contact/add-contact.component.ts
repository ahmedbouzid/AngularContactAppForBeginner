import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contactDTO';
import { Group } from 'src/app/models/groupDTO';
import { ContactServicesService } from 'src/app/service/contact-services.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  loading: boolean = false;
  contact: Contact = {} as Contact;
  errorMessage: string | null = null;
  groups!: Group[];

  constructor(private service: ContactServicesService , private router : Router) {}
  ngOnInit(): void {
    this.service.getAllGroups().subscribe({
      next: (data: Group[]) => {
        this.groups = data;
        console.log(this.groups);
      },
        error : (err)=> {
          this.errorMessage = err
        }
    });
  }
  createContact (){
  this.service.createOneConntact(this.contact).subscribe({
    next : (data : Contact) => {
      this.router.navigate(['/']).then();
      console.log(data);


    }
  })
  }
}
