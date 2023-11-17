import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';
ContactsService

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.page.html',
  styleUrls: ['./contacts-detail.page.scss'],
})
export class ContactsDetailPage implements OnInit {

  public contact: any;

  constructor(private activatedRouted: ActivatedRoute, private contactService: ContactsService) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paraMap => {
      this.contact = paraMap.get('contact');
      //debugger;
      this.contact =  JSON.parse(this.contact);
    })
  }

}
