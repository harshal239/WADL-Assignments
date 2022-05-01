import { Component, OnInit } from '@angular/core';
// import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  username = '';
  password = '';

  userList = [
    {
      name: 'harshal127',
      pass: 'harsh1234',
    },
    {
      name: 'john123',
      pass: 'johndfaf',
    },
  ];

  handleAdd = () => {
    console.log('clicked');
    this.userList.push({ name: this.username, pass: this.password });
    this.username = '';
    this.password = '';
  };

  constructor() {}

  ngOnInit(): void {}
}
