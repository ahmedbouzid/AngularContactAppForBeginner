import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contactDTO';
import { ContactServicesService } from 'src/app/service/contact-services.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss'],
})
export class ContactManagerComponent implements OnInit {
  loading: boolean = false;
  contacts: Contact[] = [];
  errorMessage: string | null = null;
  constructor(private service: ContactServicesService) {}
  ngOnInit(): void {
    this.loading = true;
    this.service.getAllContact().subscribe({
      next: (data: Contact[]) => {
        this.contacts = data;
        console.log(this.contacts);
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }
}
