import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private url ='https://reqres.in/api/users?page=2'
  constructor(private http: HttpClient) { }
  getContact(){
    return this.http.get(this.url)
  }
}
