import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import usercreatedEvent from './usercreated.event';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private _http:HttpClient) { }

  async getAllUsers(): Promise<User[]> {
    const data = await fetch("http://localhost:3000/users");
    return await data.json() ?? [];
  }

  createNewUser(user:User) {
    console.log("new user clicked"+user);
    this._http.post("http://localhost:3000/add", user,{})
      .subscribe(()=>{
        console.log('done');
        usercreatedEvent.notifySubscibers();
      });
  }
  
}
