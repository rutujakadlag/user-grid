import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {user} from '../app/model/userProperties';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl : String = 'https://1bbcc3db-c363-4a21-b167-d08943703250.mock.pstmn.io';

  constructor(private http: HttpClient) { }

  getUsers() {
    //  return this.http.get('./users.json');
  }

  addUser (newUser: user): Observable<user> {
    return this.http.post<user>(this.baseUrl + '/createUser', newUser);
  }
}
