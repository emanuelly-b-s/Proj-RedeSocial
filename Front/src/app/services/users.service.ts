// import { NewAccount } from './../interfaces/NewAccount';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { NewAccount } from '../interfaces/NewAccount';
// import { ConfigService } from './config.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class NewAccountService {
//   constructor(private http: HttpClient, private config: ConfigService) {}

//   addUser(newAccount: NewAccount) {
//     return this.http.post(this.config.backEnd + '/new-user', newAccount);

//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewAccount } from '../interfaces/NewAccount';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  add(newUser: NewAccount)
  {
    return this.http.post("$http://localhost:5066/newaccount", newUser)
  }

  // all()
  // {
  //   return this.http.get<Location[]>("$http://localhost:5066/location")
  // }

  // seach(query: string)
  // {
  //   return this.http.get<Location[]>("$http://localhost:5066/location?search=" + query)
  // }
}
