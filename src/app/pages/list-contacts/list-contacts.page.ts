import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
ContactsService
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.page.html',
  styleUrls: ['./list-contacts.page.scss'],
})
export class ListContactsPage implements OnInit {
  titulo: string= "Lista de contactos";
  contactos: any;

  constructor(private contatac: ContactsService,private router: Router) { }

  ngOnInit() {
    this.contatac.getContact().subscribe(data=>{
      this.contactos = data;
      console.log(this.contactos)
      this.contactos = this.contactos.data;
    })
  }
  view_Contact(contactos: any){
  //debugger;
    this.router.navigate(['/list-contacts/contacts-detail',{'contact': JSON.stringify(contactos)}])}

}
