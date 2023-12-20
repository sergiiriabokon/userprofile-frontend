import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import userCreatedEvent from '../usercreated.event';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-newuser',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {
  constructor(private _profiles: ProfilesService){}

  newUser(firstName: string, lastName: string, email: string, birthDate: string, registrationDate: string, ipAddress: string, status: string){
    console.log("new user clicked");
    userCreatedEvent.notifySubscibers();
    this._profiles.createNewUser({
      firstName: firstName, lastName: lastName, email: email, birthDate: new Date(birthDate), registrationDate: new Date(registrationDate), status: status,
      id: -1, ipAddress: ipAddress
    });
  }
}