import { Component, inject } from '@angular/core';
import { ProfilesService } from '../profiles.service';
import { User } from '../user';
import { NgFor } from '@angular/common';
import userCreatedEvent from '../usercreated.event';

@Component({
  selector: 'app-usertable',
  standalone: true,
  imports: [NgFor],
  templateUrl: './usertable.component.html',
  styleUrl: './usertable.component.css'
})
export class UsertableComponent {
  profilesService: ProfilesService = inject(ProfilesService);
  userList: User[] = [];
  userListFiltered: User[] = [];
  status: string = '';
  fullName: string = '';
  email: string = '';
  birthDate: string = '';

  notify() {
    this.profilesService.getAllUsers()
    .then((users:User[]) => {
      this.userList = users;
      this.userListFiltered = users;
      this.filter();
    });
    console.log('notified to fetch all users again');
  }

  constructor() {
    userCreatedEvent.subscribe(this);
    this.profilesService.getAllUsers()
      .then((users:User[]) => {
        this.userList = users;
        this.userListFiltered = users;
      });
  }

  filterResults(fullName: string, email: string, birthDate: string) {
    this.fullName = fullName;
    this.email = email;
    this.birthDate = birthDate;
    this.filter();
  }

  filter() {
    this.userListFiltered = this.userList
      .filter(e => (e.firstName+" "+e.lastName).includes(this.fullName) || !this.fullName.length)
      .filter(e => e.email.includes(this.email) || !this.email.length)
      .filter(e => e.birthDate.toString().includes(this.birthDate) || !this.birthDate.length)
      .filter(e => e.status == this.status || !this.status.length);
  }
}
